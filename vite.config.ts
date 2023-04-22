// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import AutoComponents from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

import * as path from "path";

export default defineConfig({
    base: './',
    server: {
        watch: {
            usePolling: true
        }
    },
    plugins: [
        vue(),
        AutoImport({
            dts: 'src/auto-import.d.ts',
            dirs: [
                'src/utils',// 工具类自动导入
                'src/plugin/store/modules',// pinia的模块自动导入
                'src/model', // 实体模块
            ],
            imports: [
                "vue",
                "vue-router"
            ],
            resolvers: [
                ElementPlusResolver()
            ]
        }),
        AutoComponents({
            dts: 'src/components.d.ts',
            dirs:'src/components',
            resolvers: [
                ElementPlusResolver()
            ],
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
        chunkSizeWarningLimit: 500,
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
})

// export default ({command}: ConfigEnv): UserConfigExport => {
//     return {
//         base: './',
//         server: {
//             watch: {
//                 usePolling: true
//             }
//         },
//         plugins: [
//             vue()
//         ],
//         resolve: {
//             alias: {
//                 '@': path.resolve(__dirname, 'src'),
//                 '~@': path.resolve(__dirname, 'src'),
//                 '/img': 'src/assets/images'
//             }
//         },
//         build: {
//             chunkSizeWarningLimit: 500,
//             rollupOptions: {
//                 output: {
//                     manualChunks(id) {
//                         if (id.includes('node_modules')) {
//                             return id.toString().split('node_modules/')[1].split('/')[0].toString();
//                         }
//                     },
//                     chunkFileNames: (chunkInfo) => {
//                         const facadeModuleId = chunkInfo.facadeModuleId
//                             ? chunkInfo.facadeModuleId.split('/')
//                             : [];
//                         const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
//                         return `js/${fileName}/[name].[hash].js`;
//                     }
//                 }
//             }
//         }
//     }
// }