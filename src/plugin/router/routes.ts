/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {RouteRecordRaw} from "vue-router";

import layout from '@/views/Layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
        }
    },
    {
        path: '',
        name:'首页',
        component: layout,
        children: [
            {
                path: '',
                name: '首页',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页',
                }
            }
        ]
    },
    {
        name:'系统配置',
        path: '/System',
        component: layout,
        redirect:'service',
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
            }
        ]
    }
]
