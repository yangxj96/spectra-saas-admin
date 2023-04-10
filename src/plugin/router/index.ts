import {createRouter, createWebHashHistory} from 'vue-router';
import useStore from "@/plugin/store/index";
import {ElLoading} from "element-plus";
import base from "@/plugin/router/router/base";
import platform from "@/plugin/router/router/platform";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [...base,...platform],
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

let loading: {
    close: () => void;
}

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
    console.debug('[路由守卫 - 前置] - 开始');
    // 判断token
    let token = useStore().user.getToken;
    if (token.access_token === undefined && to.path !== '/Login') {
        next({
            path: '/Login'
        });
    } else {
        loading = ElLoading.service({
            target: '.loading-box',
            text: '页面加载中',
            background: 'rgba(0,0,0,.6)'
        });
        useStore().system.setItemDisabled(true);
        if (to.matched.length <= 0) {
            loading.close();
            next({
                path: '/Error/404'
            })
        } else {
            next();
        }
    }
    console.debug('[路由守卫 - 前置] - 解析守卫结束');
})
// 路由后置守卫
router.afterEach((to, from) => {
    console.debug('[路由守卫 - 后置] - 开始');
    // 切换标题
    if (to.meta.title) {
        // 强制转换成了string,后续优化
        document.title = String(to.meta.title);
    }
    useStore().system.setItemDisabled(false);
    if (loading) {
        loading.close();
    }
    console.debug('[路由守卫 - 后置] - 解析守卫结束');
})

declare module 'vue-router' {
    interface RouteMeta {
        /** 修改的标题 */
        title?: string,
        /** 所需权限集合 */
        authority?: string[],
    }
}

export default router
