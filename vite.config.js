import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // 这里是为了scss使用~@/读取目录
      '~@': path.resolve(__dirname, './src')
    }
  }
})
