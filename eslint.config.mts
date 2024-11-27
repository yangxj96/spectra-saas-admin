import parserTypescript from "@typescript-eslint/parser";
import parserVue from "vue-eslint-parser";

import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import type { Linter } from "eslint";

// 共享规则
const sharedRules = {
  // 禁止在 TypeScript 代码中使用特定的 TypeScript 注释
  "@typescript-eslint/ban-ts-comment": "off",
  // 检测 TypeScript 代码中未使用的变量、函数参数、类成员等
  "@typescript-eslint/no-unused-vars": "off",
  // 不允许使用any 关闭
  "@typescript-eslint/no-explicit-any": "off",
  // 文件命名规则
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        pascalCase: true,
        camelCase: true,
        kebabCase: false
      },
      ignore: [
        "globals.d.ts",
        "vite-env.d.ts",
        "vite.config.ts",
        "vite-environment.d.ts",
        String.raw`\.spec.ts(x)?`,
        String.raw`\.types.ts(x)?`,
        String.raw`\.stories.ts(x)?`,
        String.raw`\.styled.ts(x)?`,
        String.raw`\.styles.ts(x)?`
      ]
    }
  ],
  // 变量命名规则
  "unicorn/prevent-abbreviations": "off"
};

export default [
  {
    ignores: ["**/build", "**/node_modules", "src/assets/iconfont/*", "src/env.d.ts"]
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.cjs", "**/*.mjs"],
    languageOptions: {
      parser: parserTypescript,
      globals: globals.builtin
    },
    plugins: {
      unicorn: pluginUnicorn,
      "@typescript-eslint": pluginTypescript
    },
    rules: {
      ...pluginUnicorn.configs.recommended.rules,
      ...pluginTypescript.configs.recommended.rules,
      ...sharedRules
    }
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTypescript
      }
    },
    plugins: {
      unicorn: pluginUnicorn,
      vue: pluginVue,
      "@typescript-eslint": pluginTypescript
    },
    rules: {
      ...pluginUnicorn.configs.recommended.rules,
      ...pluginVue.configs.recommended.rules,
      ...pluginTypescript.configs.recommended.rules,
      ...sharedRules,
      "vue/script-setup-uses-vars": "error",
      "vue/no-v-html": "error"
    }
  },
  pluginPrettierRecommended
] satisfies Linter.Config[];
