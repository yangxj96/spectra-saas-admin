<template>
    <el-menu :router="true"
             :default-active="$route.path"
             :collapse="!unfold"
             class="box-menu"
             :collapse-transition="true"
             :unique-opened="true"
    >

        <el-menu-item index="/" :disabled="itemDisabled" @click="onMenuItemClick">
            <el-icon>
                <HomeFilled/>
            </el-icon>
            <template #title>首页</template>
        </el-menu-item>

        <el-sub-menu index="1" :disabled="itemDisabled">
            <template #title>
                <el-icon>
                    <Setting/>
                </el-icon>
                <span>平台配置</span>
            </template>
            <el-menu-item index="/System">
                <el-icon>
                    <Menu/>
                </el-icon>
                平台配置
            </el-menu-item>
            <el-menu-item index="/System/Service">
                <el-icon>
                    <Menu/>
                </el-icon>
                服务管理
            </el-menu-item>
            <el-menu-item index="/System/Module">
                <el-icon>
                    <Menu/>
                </el-icon>
                模块管理
            </el-menu-item>
            <el-menu-item index="/System/Menu">
                <el-icon>
                    <Menu/>
                </el-icon>
                菜单管理
            </el-menu-item>
            <el-menu-item index="/System/Dict">
                <el-icon>
                    <Menu/>
                </el-icon>
                字典管理
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2" :disabled="itemDisabled">
            <template #title>
                <el-icon>
                    <User/>
                </el-icon>
                <span>用户管理</span>
            </template>
            <el-menu-item index="/User">
                <el-icon>
                    <Menu/>
                </el-icon>
                用户管理
            </el-menu-item>
            <el-menu-item index="/User/Tenant">
                <el-icon>
                    <Menu/>
                </el-icon>
                租户管理
            </el-menu-item>
            <el-menu-item index="/User/Authority">
                <el-icon>
                    <Menu/>
                </el-icon>
                权限管理
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {clean} from "@/plugin/request";
import {HomeFilled, Setting, User,Menu} from "@element-plus/icons-vue";
import useSystemStore from "@/plugin/store/modules/system";

export default defineComponent({
    name: "LayoutSidebar",
    components: {
        HomeFilled,
        Setting,
        User,
        Menu
    },
    data() {
        return {
            unfold: true,
            itemDisabled: false
        }
    },
    mounted() {
        // 赋值
        this.unfold = useSystemStore().getSidebarUnfold;

        this.itemDisabled = useSystemStore().getItemDisabled;

        // 订阅
        useSystemStore().$subscribe((mutation, state) => {
            this.unfold = state.sidebar_unfold;
            this.itemDisabled = state.item_disabled;
        })
    },
    methods: {
        onMenuItemClick(el: any) {
            console.log('菜单被点击', el)
            if (clean.length > 0) {
                for (let canceler of clean) {
                    canceler('取消请求');
                }
            }
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
