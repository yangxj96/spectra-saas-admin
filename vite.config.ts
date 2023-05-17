import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import AutoComponents from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath, URL } from "node:url";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  base: "./",
  server: {
    open: true,
    watch: {
      usePolling: true
    }
  },
  plugins: [
    vue(),
    AutoImport({
      dts: "src/plugin/unplugin/auto-import.d.ts",
      dirs: [
        "src/utils", // 工具类自动导入
        "src/plugin/store/modules", // pinia的模块自动导入
        "src/model", // 实体模块
        "src/api" //api模块
      ],
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()]
    }),
    AutoComponents({
      dts: "src/plugin/unplugin/components.d.ts",
      dirs: "src/components",
      resolvers: [ElementPlusResolver()]
    }),
    viteMockServe({
      mockPath: "src/mock",
      watchFiles: true,
      logger: true,
      // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
      localEnabled: true,
      // 设置打包是否启用 mock 功能
      prodEnabled: true,
      injectCode: `
      import {setupProdMockServer} from "./mock/MockProdServer";
      setupProdMockServer();
      `
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~@": fileURLToPath(new URL("./src", import.meta.url)),
      "/img": "src/assets/images"
    }
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
        chunkFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split("/") : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `js/${fileName}/[name].[hash].js`;
        }
      }
    }
  }
});
