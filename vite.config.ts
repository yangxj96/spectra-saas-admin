import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import * as path from "path";

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
      "@": path.resolve(__dirname, "src"),
      "~@": path.resolve(__dirname, "src"),
      "/img": path.resolve(__dirname, "src/assets/images")
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
