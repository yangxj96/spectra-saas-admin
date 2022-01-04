<template>
    <el-row>
        <el-col :span="4">
            <el-image :src="require('@/assets/logo2.png')" :fit="'fill'" style="height: 56px">
                <template #error>
                    <div class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </template>
            </el-image>
        </el-col>
        <el-col :span="19">
            <el-menu mode="horizontal">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4">订单管理</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="1" class="avatar">
            <el-dropdown>
                <el-avatar split-button
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon :size="16">
                                <info-filled/>
                            </el-icon>
                            个人信息
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon :size="16">
                                <edit/>
                            </el-icon>
                            修改密码
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon :size="18">
                                <circle-check-filled/>
                            </el-icon>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {CircleCheckFilled, Edit, InfoFilled} from "@element-plus/icons-vue";

export default defineComponent({
    components: {CircleCheckFilled, Edit, InfoFilled}
})

</script>

<style scoped lang="scss">

.el-menu.el-menu--horizontal {
    border: 0;
}


::v-deep(.el-dropdown) {
    width: 100%;
    height: 100%;
    text-align: center;

    span {
        position: absolute;
        top: 50%;
        //left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
