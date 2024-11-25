import typescriptEslint from "@typescript-eslint/eslint-plugin";
import vue from "eslint-plugin-vue";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      "**/build",
      "**/node_modules",
      "src/assets/iconfont/*"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"]
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      vue
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: parser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    },

    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "@typescript-eslint/ban-types": ["error", {
        extendDefaults: true,

        types: {
          "{}": false
        }
      }]
    }
  }];
