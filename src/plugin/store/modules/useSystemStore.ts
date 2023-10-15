import { defineStore } from "pinia";
import { MenuTree } from "@/types";

const useSystemStore = defineStore("system", {
  state: () => ({
    // 左侧菜单是否展开
    sidebar_unfold: true,
    // 是否禁用菜单项
    item_disabled: false,
    // 是否显示IM
    IM: false,
    // 菜单项
    menus: [
      {
        index: "1",
        icon: "icon-setting",
        name: "平台配置",
        children: [
          {
            index: "Platform",
            icon: "icon-menu",
            name: "平台配置",
            path: "/Platform"
          },
          {
            index: "Router",
            icon: "icon-menu",
            name: "路由管理",
            path: "/Platform/Router"
          },
          {
            index: "Module",
            icon: "icon-menu",
            name: "模块管理",
            path: "/Platform/Module"
          },
          {
            index: "Menu",
            icon: "icon-menu",
            name: "菜单管理",
            path: "/Platform/Menu"
          },
          {
            index: "Dict",
            icon: "icon-menu",
            name: "字典管理",
            path: "/Platform/Dict"
          }
        ]
      },
      {
        index: "2",
        icon: "icon-module",
        name: "用户管理",
        children: [
          {
            index: "User",
            icon: "icon-menu",
            name: "用户管理",
            path: "/User"
          },
          {
            index: "Tenant",
            icon: "icon-menu",
            name: "租户管理",
            path: "/User/Tenant"
          },
          {
            index: "Authority",
            icon: "icon-menu",
            name: "权限管理",
            path: "/User/Authority"
          }
        ]
      },
      {
        index: "3",
        icon: "icon-flow",
        name: "流程管理",
        children: [
          {
            index: "Flow",
            icon: "icon-menu",
            name: "流程列表",
            path: "/Flow"
          }
        ]
      }
    ] as MenuTree[]
  }),
  persist: true
});

export default useSystemStore;
