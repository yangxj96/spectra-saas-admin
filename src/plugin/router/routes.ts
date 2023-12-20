import { type RouteRecordRaw } from "vue-router";
import layout from "@/components/Layout/index.vue";

/**
 * 通用的路由,所有人都有的
 */
export default [
  {
    path: "/Login",
    name: "登录",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      title: "登录"
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
  },
  {
    name: "流程控制",
    path: "/Flow",
    component: layout,
    redirect: "",
    children: [
      {
        path: "",
        name: "流程控制",
        component: () => import("@/views/Flow/List/index.vue"),
        meta: {
          title: "流程控制"
        }
      },
      {
        path: "Created",
        name: "创建流程",
        component: () => import("@/views/Flow/Created/index.vue"),
        meta: {
          title: "创建流程"
        }
      }
    ]
  },
  {
    name: "平台配置",
    path: "/Platform",
    component: layout,
    redirect: "",
    meta: {
      menu: true
    },
    children: [
      {
        path: "",
        name: "平台配置",
        component: () => import("@/views/Platform/Config/index.vue"),
        meta: {
          title: "平台配置",
          route_group: "Platform"
        }
      },
      {
        path: "Router",
        name: "路由管理",
        component: () => import("@/views/Platform/Router/index.vue"),
        meta: {
          title: "路由管理",
          route_group: "Router"
        }
      },
      {
        path: "Module",
        name: "模块管理",
        component: () => import("@/views/Platform/Module/index.vue"),
        meta: {
          title: "模块管理",
          route_group: "Module"
        }
      },
      {
        path: "Menu",
        name: "菜单管理",
        component: () => import("@/views/Platform/Menu/index.vue"),
        meta: {
          title: "菜单管理",
          route_group: "Menu"
        }
      },
      {
        path: "Dict",
        name: "字典管理",
        component: () => import("@/views/Platform/Dict/index.vue"),
        meta: {
          title: "字典管理",
          route_group: "Dict"
        }
      }
    ]
  },
  {
    name: "用户管理",
    path: "/Account",
    component: layout,
    redirect: "",
    meta: {
      menu: true
    },
    children: [
      {
        path: "",
        name: "用户管理",
        component: () => import("@/views/User/Account/index.vue"),
        meta: {
          title: "用户管理",
          route_group: "User"
        }
      },
      {
        name: "租户管理",
        path: "/Account/Tenant",
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
        component: () => import("@/views/User/Role/index.vue"),
        meta: {
          title: "权限管理",
          route_group: "Authority"
        }
      }
    ]
  }
] as Array<RouteRecordRaw>;
