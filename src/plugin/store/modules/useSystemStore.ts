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
        default: "/Platform/Config",
        children: [
          {
            index: "Config",
            icon: "icon-menu",
            name: "平台配置",
            path: "/Platform/Config"
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
        default: "/User/Account",
        children: [
          {
            index: "User",
            icon: "icon-menu",
            name: "账号管理",
            path: "/User/Account"
          },
          {
            index: "Authority",
            icon: "icon-menu",
            name: "角色管理",
            path: "/User/Role"
          },
          {
            index: "Tenant",
            icon: "icon-menu",
            name: "租户管理",
            path: "/User/Tenant"
          }
        ]
      },
      {
        index: "3",
        icon: "icon-flow",
        name: "流程管理",
        default: "/Flow/List",
        children: [
          {
            index: "Flow",
            icon: "icon-menu",
            name: "流程列表",
            path: "/Flow/List"
          },
          {
            index: "FlowCreated",
            icon: "icon-menu",
            name: "流程新增",
            path: "/Flow/Created"
          }
        ]
      },
      {
        index: "999",
        icon: "icon-flow",
        name: "示例页面",
        default: "/Demo/Form",
        children: [
          {
            index: "Demo",
            icon: "icon-menu",
            name: "表单",
            path: "/Demo/Form"
          },
          {
            index: "Embed",
            icon: "icon-menu",
            name: "iframe",
            path: "/Demo/Embed"
          }
        ]
      }
    ] as MenuTree[]
  }),
  persist: true
});

export default useSystemStore;
