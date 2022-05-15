<template>
    <el-menu :router="true"
             :default-active="$route.path"
             :collapse="!this.unfold"
             class="box-menu"
             :collapse-transition="true"
             :unique-opened="true"
    >
        <el-menu-item index="/">
            <icon-font :icon-href="'icon-home'"/>
            <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <icon-font :icon-href="'icon-system-setting'"/>
                <span>系统配置</span>
            </template>
            <el-menu-item index="/System/service">
                <icon-font :icon-href="'icon-sub-menu'"/>
                服务管理
            </el-menu-item>
            <el-menu-item index="/System/module">
                <icon-font :icon-href="'icon-sub-menu'"/>
                模块管理
            </el-menu-item>
            <el-menu-item index="/System/menu">
                <icon-font :icon-href="'icon-sub-menu'"/>
                菜单管理
            </el-menu-item>
            <el-menu-item index="/System/dict">
                <icon-font :icon-href="'icon-sub-menu'"/>
                字典管理
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
            <template #title>
                <icon-font :icon-href="'icon-user'"/>
                <span>用户相关</span>
            </template>
            <el-menu-item index="/User/tenant">
                <icon-font :icon-href="'icon-sub-menu'"/>
                租户管理
            </el-menu-item>
            <el-menu-item index="/User/user">
                <icon-font :icon-href="'icon-sub-menu'"/>
                用户管理
            </el-menu-item>
            <el-menu-item index="/User/role">
                <icon-font :icon-href="'icon-sub-menu'"/>
                角色管理
            </el-menu-item>
            <el-menu-item index="/User/authority">
                <icon-font :icon-href="'icon-sub-menu'"/>
                权限管理
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script lang="ts">

import {Vue, Options, Watch} from "vue-property-decorator";

@Options({})
export default class LayoutSidebar extends Vue {

    public unfold: boolean = true;

    @Watch("$store.state.system.sidebar_unfold", {immediate: true})
    public watchSidebarUnfold(nv: boolean) {
        this.unfold = nv;
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
</style>
