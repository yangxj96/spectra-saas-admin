import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import { viteMockServe } from "vite-plugin-mock";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "./",
  server: {
    open: false,
    watch: {
      usePolling: true
    }
  },
  plugins: [
    vue(),
    eslint(),
    viteMockServe({
      mockPath: "src/mock",
      watchFiles: true,
      logger: true,
      localEnabled: true,
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
      "~@": fileURLToPath(new URL("./src", import.meta.url))
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
