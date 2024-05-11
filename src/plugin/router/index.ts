import { createRouter, createWebHashHistory } from "vue-router";
import useUserStore from "@/plugin/store/modules/useUserStore";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import { showLoading, hideLoading } from "@/plugin/element/loading";
import routes from "@/plugin/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    };
  }
});
// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.debug("[路由守卫 - 前置] - 开始");
  // 判断token
  const token = useUserStore().token;
  console.info(`[路由守卫 - 前置] token:${token.accessToken},目标:${to.path}`);
  if (token.accessToken === undefined && to.path !== "/Login") {
    next({ path: "/Login" });
  } else {
    showLoading();
    useSystemStore().item_disabled = true;
    if (to.matched.length <= 0) {
      hideLoading();
      next({ path: "/Error/404" });
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
  hideLoading();
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
