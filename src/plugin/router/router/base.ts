import { type RouteRecordRaw } from "vue-router";
import layout from "@/views/Layout/index.vue";

/**
 * 通用的路由,所有人都有的
 */
export default [
  {
    path: "/Login",
    name: "登录",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      title: "登录",
      authority: [],
      route_group: "Login"
    }
  },
  {
    path: "",
    name: "首页",
    component: layout,
    children: [
      {
        path: "",
        name: "首页",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          menu: true,
          authority: [],
          route_group: "Home"
        }
      }
    ]
  },
  {
    name: "Error",
    path: "/Error",
    component: layout,
    redirect: "404",
    meta: {
      route_group: "Error"
    },
    children: [
      {
        path: "404",
        name: "未匹配到页面",
        component: () => import("@/views/Error/404/index.vue"),
        meta: {
          title: "未匹配到页面"
        }
      },
      {
        path: "401",
        name: "无权访问",
        component: () => import("@/views/Error/401/index.vue"),
        meta: {
          title: "无权访问"
        }
      }
    ]
  }
] as Array<RouteRecordRaw>;
