import {RouteRecordRaw} from "vue-router";
import layout from "@/views/Layout/index.vue";

/**
 * 平台用户才能有的
 */
export default [
    {
        name: '系统配置',
        path: '/System',
        component: layout,
        redirect: 'service',
        meta: {
            authority: ["ROLE_SYSADMIN"]
        },
        children: [
            {
                path: 'service',
                name: '服务管理',
                component: () => import('@/views/System/Service/index.vue'),
                meta: {
                    title: '服务管理'
                }
            },
            {
                path: 'module',
                name: '模块管理',
                component: () => import('@/views/System/Module/index.vue'),
                meta: {
                    title: '模块管理'
                }
            },
            {
                path: 'menu',
                name: '菜单管理',
                component: () => import('@/views/System/Menu/index.vue'),
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: 'dict',
                name: '字典管理',
                component: () => import('@/views/System/Dict/index.vue'),
                meta: {
                    title: '字典管理'
                }
            },
            {
                path: 'config',
                name: '配置管理',
                component: () => import('@/views/System/Config/index.vue'),
                meta: {
                    title: '配置管理'
                }
            },
            {
                path: 'file_save',
                name: '文件存储管理',
                component: () => import('@/views/System/FileSave/index.vue'),
                meta: {
                    title: '文件存储管理'
                }
            },
        ]
    },
    {
        name: '用户相关',
        path: '/User',
        component: layout,
        redirect: 'user',
        meta: {
            authority: ["ROLE_SYSADMIN"]
        },
        children: [
            {
                path: 'user',
                name: '用户管理',
                component: () => import('@/views/User/User/index.vue'),
                meta: {
                    title: '用户管理',
                    authority: ['USER_INSERT']
                }
            },
            {
                path: 'tenant',
                name: '租户管理',
                component: () => import('@/views/User/Tenant/index.vue'),
                meta: {
                    title: '租户管理'
                }
            },
            {
                path: 'authority',
                name: '权限管理',
                component: () => import('@/views/User/Authority/index.vue'),
                meta: {
                    title: '权限管理'
                }
            }
        ]
    }
] as Array<RouteRecordRaw>