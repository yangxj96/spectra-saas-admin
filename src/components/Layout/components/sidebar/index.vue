<template>
  <el-menu
    class="box-menu"
    :router="true"
    :default-active="route.path"
    :collapse="!unfold"
    :collapse-transition="true"
    :unique-opened="true"
    @select="onMenuItemClick">
    <el-menu-item index="Home" :route="{ path: '/' }" :disabled="itemDisabled">
      <icons name="icon-home" class-name="icon-sidebar" />
      <template #title>首页</template>
    </el-menu-item>

    <el-sub-menu index="1" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-setting" class-name="icon-sidebar" />
        <span>平台配置</span>
      </template>
      <el-menu-item index="Platform" :route="{ path: '/Platform' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        平台配置
      </el-menu-item>
      <el-menu-item index="Service" :route="{ path: '/Platform/Router' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        路由管理
      </el-menu-item>
      <el-menu-item index="Module" :route="{ path: '/Platform/Module' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        模块管理
      </el-menu-item>
      <el-menu-item index="Menu" :route="{ path: '/Platform/Menu' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        菜单管理
      </el-menu-item>
      <el-menu-item index="Dict" :route="{ path: '/Platform/Dict' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        字典管理
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-user" class-name="icon-sidebar" />
        <span>用户管理</span>
      </template>
      <el-menu-item index="User" :route="{ path: '/Account' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        用户管理
      </el-menu-item>
      <el-menu-item index="Tenant" :route="{ path: '/Account/Tenant' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        租户管理
      </el-menu-item>
      <el-menu-item index="Authority" :route="{ path: '/Account/Authority' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        权限管理
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4" :disabled="itemDisabled">
      <template #title>
        <icons name="icon-flow" class-name="icon-sidebar" />
        <span>流程管理</span>
      </template>
      <el-menu-item index="Flow" :route="{ path: '/Flow' }">
        <icons name="icon-menu" class-name="icon-sidebar" />
        流程列表
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import { clean } from "@/plugin/request";
import Icons from "@/components/common/Icons.vue";
import { useRoute } from "vue-router";

const unfold = ref(true);
const itemDisabled = ref(false);
const route = useRoute();

onMounted(() => {
  unfold.value = useSystemStore().sidebar_unfold;
  itemDisabled.value = useSystemStore().item_disabled;
});

function onMenuItemClick() {
  if (clean.length > 0) {
    for (let canceler of clean) {
      canceler("取消请求");
    }
  }
}
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
