/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {RouteRecordRaw} from "vue-router";

import layout from '@/layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
	{
		path: '',
		component: layout,
		children: [
			{
				path: '',
				name: 'index',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
				}
			}
		]
	},
	{
		path: '/system',
		component: layout,
		children: [
			{
				path: 'service',
				name: 'service',
				component: () => import('@/views/system/service/index.vue'),
				meta: {
					// title: '服务管理'
					title: '测试1'
				}
			},
			{
				path: 'module',
				name: 'module',
				component: () => import('@/views/system/module/index.vue'),
				meta: {
					// title: '模块管理'
					title: '测试2'
				}
			},
			{
				path: 'menu',
				name: 'menu',
				component: () => import('@/views/system/menu/index.vue'),
				meta: {
					// title: '菜单管理'
					title: '测试3'
				}
			},
			{
				path: 'dict',
				name: 'dict',
				component: () => import('@/views/system/dict/index.vue'),
				meta: {
					// title: '字典管理'
					title: '测试4'
				}
			}
		]
	}
]
