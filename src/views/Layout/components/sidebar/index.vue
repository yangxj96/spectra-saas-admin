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
                <IconHome color="#4d4d4d"/>
            </el-icon>
            <template #title>首页</template>
        </el-menu-item>

        <el-sub-menu index="1" :disabled="itemDisabled">
            <template #title>
                <el-icon>
                    <IconSetting color="#4d4d4d"/>
                </el-icon>
                <span>平台配置</span>
            </template>
            <el-menu-item index="/System">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                平台配置
            </el-menu-item>
            <el-menu-item index="/System/Service">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                服务管理
            </el-menu-item>
            <el-menu-item index="/System/Module">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                模块管理
            </el-menu-item>
            <el-menu-item index="/System/Menu">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                菜单管理
            </el-menu-item>
            <el-menu-item index="/System/Dict">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                字典管理
            </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2" :disabled="itemDisabled">
            <template #title>
                <el-icon>
                    <IconUser color="#4d4d4d"/>
                </el-icon>
                <span>用户管理</span>
            </template>
            <el-menu-item index="/User">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                用户管理
            </el-menu-item>
            <el-menu-item index="/User/Tenant">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                租户管理
            </el-menu-item>
            <el-menu-item index="/User/Authority">
                <el-icon>
                    <IconMenu color="#4d4d4d"/>
                </el-icon>
                权限管理
            </el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {clean} from "@/plugin/request";
import useSystemStore from "@/plugin/store/modules/system";
import IconHome from "@/icon/IconHome.vue";
import IconSetting from "@/icon/IconSetting.vue";
import IconUser from "@/icon/IconUser.vue";
import IconMenu from "@/icon/IconMenu.vue";

export default defineComponent({
    name: "LayoutSidebar",
    components: {
        IconHome,
        IconSetting,
        IconUser,
        IconMenu
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
