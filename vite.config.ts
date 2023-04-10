import {ConfigEnv, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

export default ({command}: ConfigEnv): UserConfigExport => {
    return {
        base: './',
        server: {
          watch: {
              usePolling: true
          }
        },
        plugins: [
            vue()
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
    }
}