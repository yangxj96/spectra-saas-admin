import { type RouteRecordRaw } from "vue-router";
import layout from "@/views/Layout/index.vue";

/**
 * 平台用户才能有的
 */
export default [
  {
    name: "平台配置",
    path: "/System",
    component: layout,
    redirect: "",
    meta: {
      menu: true
    },
    children: [
      {
        path: "",
        name: "平台配置",
        component: () => import("@/views/System/Config/index.vue"),
        meta: {
          title: "平台配置",
          route_group: "Platform"
        }
      },
      {
        path: "Service",
        name: "服务管理",
        component: () => import("@/views/System/Service/index.vue"),
        meta: {
          title: "服务管理",
          route_group: "Service"
        }
      },
      {
        path: "Module",
        name: "模块管理",
        component: () => import("@/views/System/Module/index.vue"),
        meta: {
          title: "模块管理",
          route_group: "Module"
        }
      },
      {
        path: "Menu",
        name: "菜单管理",
        component: () => import("@/views/System/Menu/index.vue"),
        meta: {
          title: "菜单管理",
          route_group: "Menu"
        }
      },
      {
        path: "Dict",
        name: "字典管理",
        component: () => import("@/views/System/Dict/index.vue"),
        meta: {
          title: "字典管理",
          route_group: "Dict"
        }
      }
    ]
  },
  {
    name: "用户管理",
    path: "/User",
    component: layout,
    redirect: "",
    meta: {
      menu: true
    },
    children: [
      {
        path: "",
        name: "用户管理",
        component: () => import("@/views/User/User/index.vue"),
        meta: {
          title: "用户管理",
          route_group: "User"
        }
      },
      {
        name: "租户管理",
        path: "/User/Tenant",
        redirect: "",
        meta: {
          route_group: "Tenant"
        },
        children: [
          {
            path: "",
            name: "租户信息",
            component: () => import("@/views/User/Tenant/index.vue"),
            meta: {
              title: "租户信息"
            }
          },
          {
            path: "Register",
            name: "租户注册",
            component: () => import("@/views/User/Tenant/components/register.vue"),
            meta: {
              title: "租户注册"
            }
          },
          {
            path: "Details",
            name: "租户详情",
            component: () => import("@/views/User/Tenant/components/register.vue"),
            meta: {
              title: "租户详情"
            }
          }
        ]
      },
      {
        path: "Authority",
        name: "权限管理",
        component: () => import("@/views/User/Authority/index.vue"),
        meta: {
          title: "权限管理",
          route_group: "Authority"
        }
      }
    ]
  }
] as Array<RouteRecordRaw>;
