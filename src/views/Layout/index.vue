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
                        <i class="box-unfold-a" @click="handleChangeUnfold">
                            <icon-font :icon-href="icon_class ? 'icon-close-menu' : 'icon-unfold-menu'"/>
                        </i>
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
                    <el-row>
                        <el-footer class="footer">
                            Copyright © 2018-2022
                            <strong><a href="//www.it100000.com/" target="_blank">IT十万</a></strong>
                            &nbsp;
                            <strong><a href="//www.it100000.com/" target="_blank">it100000.com</a></strong>
                            All Rights Reserved. 备案号：
                            <a target="_blank" rel="nofollow" href="https://beian.miit.gov.cn/">滇ICP备17009249号-2</a>
                        </el-footer>
                    </el-row>
                </div>
            </el-main>
        </el-container>

    </el-container>
</template>

<script lang="ts">

import Navbar from "@/views/Layout/components/navbar/index.vue";
import Sidebar from "@/views/Layout/components/sidebar/index.vue";

import {Watch, Options, Vue} from "vue-property-decorator";

@Options({
    components: {Navbar, Sidebar}
})
export default class Layout extends Vue {

    public width: string = 'auto';

    public icon_class: boolean = true;

    public handleChangeUnfold() {
        this.$store.commit('SystemModule/CHANGE_SIDEBAR_UNFOLD');
    }

    @Watch('$store.state.SystemModule.sidebar_unfold', {immediate: true})
    private watchSidebarUnfold(newVal: boolean) {
        this.icon_class = newVal;
    }

}
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
    border-bottom: solid 1px var(--el-border-color);
    padding: 0;
}

.box-container {
    height: calc(100% - 61px);
}

.box-main {

    .box-content {
        width: 100%;
        height: calc(100% - 25px - 25px);
        padding-top: 1%;
    }

    .box-breadcrumb {
        height: 25px;
        line-height: 10px;
        padding-bottom: 10px;
    }

    .box-unfold-a:hover {
        cursor: pointer;
    }

    .footer {
        text-align: center;
        width: 100%;
        height: 20px;
        font-size: 10px;
        line-height: 1;
        color: var(--el-text-color-regular);

        a {
            color: var(--el-text-color-primary);
        }
    }
}


</style>
