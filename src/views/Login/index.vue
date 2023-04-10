<template>
    <div class="box">
        <el-dialog :model-value="true"
                   :close-on-click-modal="false"
                   :close-on-press-escape="false"
                   :show-close="false"
                   class="dialog-login"
                   width="20%">
            <template #header>
                <p>
                    <icon-font :icon-href="'icon-login'"/>
                    用户登录
                </p>
            </template>
            <div>
                <el-form ref="ruleFormRef" label-width="60px" :model="user" :rules="rules">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="user['username']" placeholder="请输入账号"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="user['password']" placeholder="请输入密码" show-password/>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <el-button type="primary" @click="handleLogin(this.$refs.ruleFormRef)">
                    <icon-font :icon-href="'icon-login-btn'"/>
                    登录
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {FormInstance, FormRules} from "element-plus";
import useUserStore from "@/plugin/store/modules/user";
import UserApi, {Token} from "@/api/UserApi";
import {AxiosResponse} from "axios";
import {IResult} from "@/plugin/request";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";

export default defineComponent({
    name: "login",
    data() {
        return {
            userStore: useUserStore(),
            user: {
                username: 'sysadmin',
                password: 'sysadmin'
            } as User,
            rules: {
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
            } as FormRules
        }
    },
    methods: {
        async handleLogin(formEl: FormInstance | undefined) {
            if (!formEl) {
                return;
            }
            await formEl.validate((valid) => {
                if (valid) {
                    UserApi.login(this.user.username, this.user.password).then((response: AxiosResponse<IResult<Token>>) => {
                            let result = response.data.data;
                            this.$message.success({
                                ...MessageDefaultConfig,
                                message: `登录成功`,
                                onClose: () => {
                                    useUserStore().setToken(result);
                                    this.$router.push({path: '/'});
                                }
                            })
                        }
                    );
                } else {
                    this.$message.error({
                        ...MessageDefaultConfig,
                        message: '请检查输入'
                    })
                }
            });
        }
    }
})


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
