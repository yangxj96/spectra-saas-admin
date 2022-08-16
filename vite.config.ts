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
                localEnabled: command === 'serve'
            })
        ],
        define: {
            'process.env': {}
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
//             // 这里是为了scss使用~@/读取目录
                '~@': path.resolve(__dirname, './src'),
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
