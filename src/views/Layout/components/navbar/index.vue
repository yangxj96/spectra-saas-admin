<template>
    <el-row>
        <el-col :span="4">
            <img src="~@/assets/logo2.png" class="goto-home" @click="gotoHome" alt="logo" style="height: 56px"/>
        </el-col>

        <el-col :span="1" :offset="19">
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
                                       :icon-class="{width: '1.5em', height: '1.1em'}"/>
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
    <personal-details/>
    <change-password/>
</template>

<script setup lang="ts">
import PersonalDetails from "@/components/Props/PersonalDetails/index.vue";
import ChangePassword from "@/components/Props/ChangePassword/index.vue";
import useStore from "@/plugin/store";
import {getCurrentInstance} from "vue";

const propsStore = useStore().props;
const {proxy} = getCurrentInstance() as any;

// 打开个人信息弹框
function handlePersonalPopup() {
    propsStore.setPersonalDetails(true);
}

// 打开修改密码信息弹框
function handleModifyPasswordPopup() {
    propsStore.setChangePassword(true);
}

// 处理用户登出消息
function handleUserLogout() {
    proxy.$message.success({
        message: '登出成功',
        duration: 500,
        onClose() {
            window.localStorage.clear();
            window.sessionStorage.clear();
            location.reload();
        }
    })
}

// 跳转到首页
function gotoHome() {
    proxy.$router.push({path: '/'});
}

</script>

<style scoped lang="scss">

.goto-home {
    cursor: pointer;
}

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
