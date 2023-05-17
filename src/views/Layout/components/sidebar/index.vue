<template>
  <el-menu class="box-menu" :router="true" :default-active="$route.meta.route_group" :collapse="!unfold" :collapse-transition="true" :unique-opened="true" @select="onMenuItemClick">
    <el-menu-item index="Home" :route="{ path: '/' }" :disabled="itemDisabled">
      <icons name="icon-home" class-name="icon-sidebar" />
      <template #title>首页</template>
    </el-menu-item>

    <el-sub-menu index="1" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-setting" class-name="icon-sidebar" />
        <span>平台配置</span>
      </template>
      <el-menu-item index="Platform" :route="{ path: '/System' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        平台配置
      </el-menu-item>
      <el-menu-item index="Service" :route="{ path: '/System/Service' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        服务管理
      </el-menu-item>
      <el-menu-item index="Module" :route="{ path: '/System/Module' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        模块管理
      </el-menu-item>
      <el-menu-item index="Menu" :route="{ path: '/System/Menu' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        菜单管理
      </el-menu-item>
      <el-menu-item index="Dict" :route="{ path: '/System/Dict' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        字典管理
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-user" class-name="icon-sidebar" />
        <span>用户管理</span>
      </template>
      <el-menu-item index="User" :route="{ path: '/User' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        用户管理
      </el-menu-item>
      <el-menu-item index="Tenant" :route="{ path: '/User/Tenant' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        租户管理
      </el-menu-item>
      <el-menu-item index="Authority" :route="{ path: '/User/Authority' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        权限管理
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-flow" class-name="icon-sidebar" />
        <span>流程管理</span>
      </template>
      <el-menu-item index="Flow" :route="{ path: '/Flow' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        流程列表
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-project" class-name="icon-sidebar" />
        <span>项目管理</span>
      </template>
      <el-menu-item index="Project" :route="{ path: '/Project' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        项目列表
      </el-menu-item>
      <el-menu-item index="Feasibility" :route="{ path: '/Project/Feasibility' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        项目立项
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { clean } from "@/plugin/request";
import type { MenuItemClicked } from "element-plus";
import type { NavigationFailure } from "vue-router";

export default defineComponent({
  name: "LayoutSidebar",
  data() {
    return {
      unfold: true,
      itemDisabled: false
    };
  },
  mounted() {
    // 赋值
    this.unfold = useSystemStore().sidebar_unfold;

    this.itemDisabled = useSystemStore().item_disabled;

    // 订阅
    useSystemStore().$subscribe((mutation, state) => {
      this.unfold = state.sidebar_unfold;
      this.itemDisabled = state.item_disabled;
    });
  },
  methods: {
    onMenuItemClick() {
      // 参数 index: string, path: string[], item: MenuItemClicked, router: any
      // console.log(`index:${index},path:${path}`);
      // console.log(`item:`, item);
      // console.log(`router:`, router);
      if (clean.length > 0) {
        for (let canceler of clean) {
          canceler("取消请求");
        }
      }
    }
  }
});
</script>

<style scoped lang="scss">
.box-menu {
  height: 100%;
}

.box-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.icon-sidebar {
  width: 1.4em;
  height: 1.4em;
  padding-right: 0.5em;
  padding-left: 0.2em;
}
</style>
