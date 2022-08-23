import {ConfigEnv, UserConfigExport} from 'vite'
import {viteMockServe} from "vite-plugin-mock";
import vue from '@vitejs/plugin-vue'
import * as path from "path";

export default ({command}: ConfigEnv): UserConfigExport => {
    return {
        base: './',
        plugins: [
            vue(),
            viteMockServe({
                mockPath: 'mock',
                watchFiles: true,
                logger: true,
                // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
                localEnabled: command === 'serve',
                // 设置打包是否启用 mock 功能
                prodEnabled: command !== 'serve',
                injectCode: `
                 import {setupProdMockServer} from "../mock/MockProdServer";
                 setupProdMockServer();
                 `
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '~@': path.resolve(__dirname, 'src'),
                '/img': 'src/assets/images'
            }
        },
        build: {
            chunkSizeWarningLimit: 650,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    },
                    chunkFileNames: (chunkInfo) => {
                        const facadeModuleId = chunkInfo.facadeModuleId
                            ? chunkInfo.facadeModuleId.split('/')
                            : [];
                        const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
                        return `js/${fileName}/[name].[hash].js`;
                    }
                }
            }
        }
    }
}
