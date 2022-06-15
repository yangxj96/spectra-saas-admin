/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from '@/plugin/router/routes';
import {useUserStore} from "@/plugin/store/user";


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

router.beforeEach(async (to, from, next) => {
    console.debug('[路由守卫] - 开始');
    // 切换标题
    if (to.meta.title) {
        // 强制转换成了string,后续优化
        document.title = String(to.meta.title);
    }
    // 判断token
    let token = useUserStore().getToken;
    if (token === '' && to.path !== '/Login') {
        next({
            path: '/Login'
        });
    } else {
        next();
    }
    console.debug('[路由守卫] - 解析守卫结束');
})

export default router
