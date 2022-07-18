<template>
    <div class="box">
        <el-dialog :model-value="true"
                   :close-on-click-modal="false"
                   :close-on-press-escape="false"
                   :show-close="false"
                   custom-class="dialog-login"
                   width="20%">
            <template #header>
                <p>
                    <icon-font :icon-href="'icon-login'"/>
                    用户登录
                </p>
            </template>
            <div>
                <el-form label-width="60px" :model="user">
                    <el-form-item label="账号">
                        <el-input v-model="user.username" placeholder="请输入账号"/>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="user.password" placeholder="请输入密码" show-password/>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <el-button type="primary" @click="handleLogin">
                    <icon-font :icon-href="'icon-login-btn'"/>
                    登录
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";
import useStore from '@/plugin/store/index';
import UserApi from "@/api/UserApi";
import {Token} from "@/plugin/store/modules/user";

@Options({})
export default class Login extends Vue {

    public userStore = useStore().user;

    public user: User = {
        username: '',
        password: ''
    }

    // 登录事件处理
    public handleLogin() {
        UserApi.login(this.user.username, this.user.password).then((r: any) => {
            let res = r as Token;
            console.log(`access_token:${res.access_token}`);
            this.$message.success({
                ...MessageDefaultConfig,
                message: '测试',
                onClose: () => {
                    this.userStore.setToken(r);
                    this.$router.push({path: '/'});
                }
            })
        })
    }
}

interface User {
    username: string,
    password: string
}

</script>

<style scoped lang="scss">
.box {
    height: 100vh;
    background: url('~@/assets/images/background-login.jpg') no-repeat;
    background-size: 100% 100%;
}

:deep(.dialog-login) {
    left: 30%;
    top: 30vh;
}

:deep(.el-dialog__body) {
    padding-bottom: 0;
}

:deep(.el-dialog__footer) {
    padding-top: 0;
}
</style>
