/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {createRouter, createWebHashHistory} from 'vue-router'

import {routes} from '@/router/routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0
		}
	}
})

router.beforeResolve(async to => {
	console.debug('----解析守卫 begin -----------');
	console.debug(to);
	if (to.meta.title) {
		// 强制转换成了string,后续优化
		document.title = String(to.meta.title);
	}
	console.debug('----解析守卫 end -----------');
	return true;
})

export default router
