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
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
        }
    },
    {
        path: '',
        component: layout,
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页',
                }
            }
        ]
    },
    {
        path: '/System',
        component: layout,
        children: [
            {
                path: 'service',
                name: 'service',
                component: () => import('@/views/System/Service/index.vue'),
                meta: {
                    // title: '服务管理'
                    title: '测试1'
                }
            },
            {
                path: 'module',
                name: 'module',
                component: () => import('@/views/System/Module/index.vue'),
                meta: {
                    // title: '模块管理'
                    title: '测试2'
                }
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@/views/System/Menu/index.vue'),
                meta: {
                    // title: '菜单管理'
                    title: '测试3'
                }
            },
            {
                path: 'dict',
                name: 'dict',
                component: () => import('@/views/System/Dict/index.vue'),
                meta: {
                    // title: '字典管理'
                    title: '测试4'
                }
            }
        ]
    }
]
