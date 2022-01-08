<template>
    <el-menu :router="true"
             :default-active="$route.path"
             :collapse="!this.unfold"
             class="box-menu"
             :collapse-transition="true"
             :unique-opened="true"
    >
        <el-menu-item index="/">
            <template #title>
                <icon-font :icon-href="'icon-home'"/>
                首页
            </template>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <icon-font :icon-href="'icon-system-setting'"/>
                <span>系统配置</span>
            </template>
            <el-menu-item index="/system/service">
                <icon-font :icon-href="'icon-sub-menu'"/>
                服务管理
            </el-menu-item>
            <el-menu-item index="/system/module">
                <icon-font :icon-href="'icon-sub-menu'"/>
                模块管理
            </el-menu-item>
            <el-menu-item index="/system/menu">
                <icon-font :icon-href="'icon-sub-menu'"/>
                菜单管理
            </el-menu-item>
            <el-menu-item index="/system/dict">
                <icon-font :icon-href="'icon-sub-menu'"/>
                字典管理
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
            <template #title>
                <icon-font :icon-href="'icon-user'"/>
                <span>用户相关</span>
            </template>
            <el-menu-item index="1-2">
                <icon-font :icon-href="'icon-sub-menu'"/>
                租户管理
            </el-menu-item>
            <el-menu-item index="1-2">
                <icon-font :icon-href="'icon-sub-menu'"/>
                用户管理
            </el-menu-item>
            <el-menu-item index="1-2">
                <icon-font :icon-href="'icon-sub-menu'"/>
                角色管理
            </el-menu-item>
            <el-menu-item index="1-2">
                <icon-font :icon-href="'icon-sub-menu'"/>
                权限管理
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/store";

export default defineComponent({
    data() {
        const store = useStore();
        return {
            store,
            unfold: true
        }
    },
    watch: {
        'store.state.SystemModule.sidebar_unfold'(nv) {
            this.unfold = nv;
        }
    }
})
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
