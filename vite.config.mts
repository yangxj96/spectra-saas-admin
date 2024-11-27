import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import { fileURLToPath, URL } from "url";
import CesiumJS from "vite-plugin-cesium";

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log("环境变量:", env);
  return {
    base: "./",
    server: {
      open: false,
      watch: {
        usePolling: true
      }
    },
    plugins: [vue(), vueJsx(), VueDevTools(), CesiumJS()],
    css: {
      preprocessorOptions: {
        scss: {
          // 屏蔽sass提示高版本删除api的警告信息
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
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
