import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from '@/plugin/router/routes';
import useStore from "@/plugin/store/index";

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
    let token = useStore().user.getToken;
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
