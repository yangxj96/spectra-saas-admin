<template>
    <el-container class="box">
        <el-header class="box-header">
            <navbar/>
        </el-header>

        <el-container class="box-container">
            <el-aside width="200px">
                <sidebar/>
            </el-aside>

            <el-main class="box-main">
                <div style="height: 100%">
                    <el-row class="box-breadcrumb">
                        <i class="box-unfold-a"
                           :class="icon_class ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
                           @click="handleChangeUnfold"
                           style="padding-right: 1%"/>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-row>
                    <div class="box-content">
                        <router-view/>
                    </div>
                </div>
            </el-main>
        </el-container>

    </el-container>
</template>

<script lang="ts">

import {defineComponent} from "vue";

import Navbar from "@/layout/components/navbar/index.vue";
import Sidebar from "@/layout/components/sidebar/index.vue";
import {useStore} from "@/store";

export default defineComponent({
    name: 'Layout',
    components: {Navbar, Sidebar},
    data() {
        const store = useStore();
        return {
            store,
            width: 'auto',
            icon_class: true
        }
    },
    methods: {
        handleChangeUnfold() {
            // 切换状态
            this.store.commit('SystemModule/CHANGE_SIDEBAR_UNFOLD');
        }
    },
    watch: {
        'store.state.SystemModule.sidebar_unfold'(nv) {
            this.icon_class = nv;
        }
    }
})
</script>

<style scoped lang="scss">
::v-deep(.el-aside) {
    width: auto;
}

.box {
    height: 100vh;
}

.box-aside {
    min-width: 64px;
}

.box-header {
    height: auto;
    border-bottom: solid 1px var(--el-border-color-base);
    padding: 0;
}

.box-container{
    height: calc(100% - 61px);
}

.box-main {
    padding: 20px 20px 0;

    .box-content {
        width: 100%;
        height: calc(100% - 25px);
    }

    .box-breadcrumb {
        height: 25px;
        line-height: 10px;
        padding-bottom: 10px;
    }

    .box-unfold-a:hover {
        cursor: pointer;
    }
}


</style>
