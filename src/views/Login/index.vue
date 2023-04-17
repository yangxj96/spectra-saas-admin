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
                    <el-icon>
                        <IconLogin color="#9B9B9B"/>
                    </el-icon>
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
                <el-button type="primary" @click="handleLogin">
                    <el-icon>
                        <IconLoginBtn/>
                    </el-icon>
                    <span>登录</span>
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts">

import {FormInstance, FormRules} from "element-plus";

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
        async handleLogin() {
            let el = this.$refs.ruleFormRef as FormInstance;
            if (!el) {
                return;
            }
            await el.validate((valid) => {
                if (valid) {
                    this.$message.success({
                        ...MessageDefaultConfig,
                        message: '登录成功',
                        onClose: () => {
                            this.$router.push({path: '/'});
                        }
                    })
                    useUserStore().setToken({
                        username: "sysadmin",
                        access_token: "29c02a6f-c886-4668-82a5-4a3139b5d90f",
                        refresh_token: "b83c2f7f-d90e-440a-8327-55a2a8cd7422",
                        authorities: [
                            "系统管理员",
                            "子管理员",
                            "普通用户",
                            "USER_INSERT",
                            "USER_DELETE",
                            "USER_UPDATE",
                            "USER_SELECT",
                            "SYS_CONFIGURE_INSERT",
                            "SYS_CONFIGURE_DELETE",
                            "SYS_CONFIGURE_UPDATE",
                            "SYS_CONFIGURE_SELECT"
                        ],
                        expiration_time: "2023-04-11 11:58:33"
                    })
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
