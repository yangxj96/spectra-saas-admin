import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import common from "@/plugin/router/router/common";
// import platform from "@/plugin/router/router/modle/platform";
// import flow from "@/plugin/router/router/modle/flow";
import useUserStore from "@/plugin/store/modules/useUserStore";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import { showLoading, hideLoading } from "@/plugin/element/loading";
import Layout from "@/components/Layout/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: common,
  scrollBehavior() {
    return {
      top: 0
    };
  }
});

/**
 * 生成路由
 */
export function generateRouter() {
  const modules = import.meta.glob("@/views/**/*.vue");
  const menus = useSystemStore().menus;
  for (const menu of menus) {
    const datum = {
      name: menu.name,
      path: menu.default
    } as RouteRecordRaw;
    if (menu.children) {
      datum.component = Layout;
      datum.redirect = "";
      datum.children = [];
      for (let i = 0; i < menu.children.length; i++) {
        const f1 = menu.children[i];
        datum.children?.push({
          path: f1.path!,
          name: f1.name,
          component: modules[`/src/views${f1.path}/index.vue`]
        });
      }
    }
    router.addRoute(datum);
  }
}

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
    showLoading();
    useSystemStore().item_disabled = true;
    if (to.matched.length <= 0) {
      // loading.close();
      hideLoading();
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
