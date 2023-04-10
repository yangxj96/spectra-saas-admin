<template>
    <el-menu :router="true"
             :default-active="$route.path"
             :collapse="!unfold"
             class="box-menu"
             :collapse-transition="true"
             :unique-opened="true"
    >

        <el-menu-item index="/" :disabled="itemDisabled" @click="onMenuItemClick">
            <icon-font :icon-href="'icon-home'"/>
            <template #title>首页</template>
        </el-menu-item>

        <el-sub-menu index="1" :disabled="itemDisabled">
            <template #title>
                <icon-font :icon-href="'icon-system-setting'"/>
                <span>系统配置</span>
            </template>
            <el-menu-item index="/System/Service">
                <icon-font :icon-href="'icon-sub-menu'"/>
                服务管理
            </el-menu-item>
            <el-menu-item index="/System/Module">
                <icon-font :icon-href="'icon-sub-menu'"/>
                模块管理
            </el-menu-item>
            <el-menu-item index="/System/Menu">
                <icon-font :icon-href="'icon-sub-menu'"/>
                菜单管理
            </el-menu-item>
            <el-menu-item index="/System/Dict">
                <icon-font :icon-href="'icon-sub-menu'"/>
                字典管理
            </el-menu-item>
            <el-menu-item index="/System/Config">
                <icon-font :icon-href="'icon-sub-menu'"/>
                配置管理
            </el-menu-item>
            <el-menu-item index="/System/FileSave">
                <icon-font :icon-href="'icon-sub-menu'"/>
                文件存储管理
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2" :disabled="itemDisabled">
            <template #title>
                <icon-font :icon-href="'icon-user'"/>
                <span>用户相关</span>
            </template>
            <el-menu-item index="/User">
                <icon-font :icon-href="'icon-sub-menu'"/>
                用户管理
            </el-menu-item>
            <el-menu-item index="/User/Tenant">
                <icon-font :icon-href="'icon-sub-menu'"/>
                租户管理
            </el-menu-item>
            <el-menu-item index="/User/Authority">
                <icon-font :icon-href="'icon-sub-menu'"/>
                权限管理
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script setup lang="ts">
import useStore from '@/plugin/store/index';
import {onMounted, ref} from "vue";
import {clean} from "@/plugin/request";

let unfold = ref(true);

let itemDisabled = ref(false);

function onMenuItemClick(el: any) {
    if (clean.length > 0){
        for (let canceler of clean) {
            canceler('取消请求');
        }
    }
}

onMounted(() => {
    // 赋值
    unfold.value = useStore().system.getSidebarUnfold;

    itemDisabled.value = useStore().system.getItemDisabled;

    // 订阅
    useStore().system.$subscribe((mutation, state) => {
        unfold.value = state.sidebar_unfold;
        itemDisabled.value = state.item_disabled;
    })
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
