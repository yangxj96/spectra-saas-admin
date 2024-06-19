import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import { fileURLToPath, URL } from "url";
import CesiumJS from "vite-plugin-cesium";

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
    plugins: [vue(), vueJsx(), VueDevTools(), CesiumJS()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    build: {
      outDir: "build"
    }
  };
});
