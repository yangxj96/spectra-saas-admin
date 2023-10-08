import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import { fileURLToPath, URL } from "url";

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(env);
  return {
    base: "./",
    server: {
      open: false,
      watch: {
        usePolling: true
      }
    },
    plugins: [vue(), eslint()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    build: {
      outDir: "build",
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
  };
});
