import { createRouter, createWebHashHistory } from "vue-router";
import { ElLoading } from "element-plus";
import base from "@/plugin/router/router/base";
import platform from "@/plugin/router/router/modle/platform";
import flow from "@/plugin/router/router/modle/flow";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...base, ...platform, ...flow],
  scrollBehavior() {
    return {
      top: 0
    };
  }
});

let loading: {
  close: () => void;
};

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.debug("[路由守卫 - 前置] - 开始");
  // 判断token
  const token = useUserStore().token;
  if (token.access_token === undefined && to.path !== "/Login") {
    next({
      path: "/Login"
    });
  } else {
    loading = ElLoading.service({
      target: ".loading-box",
      text: "页面加载中",
      background: "rgba(0,0,0,.6)"
    });
    useSystemStore().item_disabled = true;
    if (to.matched.length <= 0) {
      loading.close();
      next({
        path: "/Error/404"
      });
    } else {
      next();
    }
  }
  console.debug("[路由守卫 - 前置] - 解析守卫结束");
});
// 路由后置守卫
router.afterEach(to => {
  console.debug("[路由守卫 - 后置] - 开始");
  // 切换标题
  if (to.meta.title) {
    // 强制转换成了string,后续优化
    document.title = String(to.meta.title);
  }
  useSystemStore().item_disabled = false;
  if (loading) {
    loading.close();
  }
  console.debug("[路由守卫 - 后置] - 解析守卫结束");
});

declare module "vue-router" {
  interface RouteMeta {
    /** 修改的标题 */
    title?: string;
    /** 所需权限集合 */
    authority?: string[];
    /** 路由分组 **/
    route_group?: string;
    /** 菜单项 **/
    menu?: boolean;
  }
}

export default router;
