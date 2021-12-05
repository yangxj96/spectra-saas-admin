<template>
    <el-menu :router="true"
             :default-active="$route.path"
             :collapse="!this.unfold"
             class="box-menu"
             :collapse-transition="true"
             :unique-opened="true"
    >
        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <i class="el-icon-s-tools"></i>
                <span>系统配置</span>
            </template>
            <el-menu-item index="/system/service"><i class="el-icon-s-operation"/>服务管理</el-menu-item>
            <el-menu-item index="/system/module"><i class="el-icon-s-operation"/>模块管理</el-menu-item>
            <el-menu-item index="/system/menu"><i class="el-icon-s-operation"/>菜单管理</el-menu-item>
            <el-menu-item index="/system/dict"><i class="el-icon-s-operation"/>字典管理</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
            <template #title>
                <i class="el-icon-s-tools"></i>
                <span>用户相关</span>
            </template>
            <el-menu-item index="1-2"><i class="el-icon-s-operation"/>租户管理</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-s-operation"/>用户管理</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-s-operation"/>角色管理</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-s-operation"/>权限管理</el-menu-item>
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
