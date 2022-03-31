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

        </el-col>
        <el-col :span="1">
            <el-dropdown>
                <el-avatar split-button class="avatar-image"
                           src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c"/>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handlePersonalPopup">
                            <icon-font :icon-href="'icon-personal'" :icon-class="{width: '1.5em', height: '1.5em'}"/>
                            个人信息
                        </el-dropdown-item>
                        <el-dropdown-item @click="handleModifyPasswordPopup">
                            <icon-font :icon-href="'icon-change-password'"
                                       :icon-class="{width: '1.1em', height: '1.1em'}"/>
                            修改密码
                        </el-dropdown-item>
                        <el-dropdown-item @click="handleUserLogout">
                            <icon-font :icon-href="'icon-logout'" :icon-class="{width: '1.5em', height: '1.5em'}"/>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
    <personal-popup        :visible="this.personal_visible"/>
    <modify-password-popup :visible="this.modify_password_visible"/>
</template>

<script lang="ts">

import PersonalPopup from "@/components/PersonalPopup/index.vue";
import ModifyPasswordPopup from "@/components/ModifyPasswordPopup/index.vue";
import {ElMessage} from 'element-plus';

import {Vue, Options} from "vue-property-decorator";

@Options({
    components: {PersonalPopup, ModifyPasswordPopup}
})
export default class LayoutNavbar extends Vue {

    public personal_visible: boolean = false;
    public modify_password_visible: boolean = false;

    /** 打开个人信息弹框 **/
    public handlePersonalPopup() {
        this.personal_visible = !this.personal_visible;
    }

    /** 打开修改密码信息弹框 **/
    public handleModifyPasswordPopup() {
        this.modify_password_visible = !this.modify_password_visible;
    }

    /** 处理用户登出消息 **/
    public handleUserLogout() {
        ElMessage.success({
            message: '登出成功',
            duration: 500,
            onClose() {
                // 清空storage后强制刷新下,防止缓存
                window.sessionStorage.clear();
                location.reload();
            }
        })
    }
}

</script>

<style scoped lang="scss">

.el-menu.el-menu--horizontal {
    border: 0;
}

:deep(.el-avatar--large) {
    --el-avatar-size: 2.8vw
}

:deep(.el-dropdown) {
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
