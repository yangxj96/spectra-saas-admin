/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from '@/router/routes';
import store from "@/store";

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
    console.debug('----解析守卫 begin -----------');
    // 切换标题
    if (to.meta.title) {
        // 强制转换成了string,后续优化
        document.title = String(to.meta.title);
    }
    // 判断token
    let token = store.getters["UserModule/token"];
    if (token === '' && to.path !== '/login') {
        next({
            path: '/login'
        });
    } else {
        next();
    }
    console.debug('----解析守卫 end -----------');
})

export default router
