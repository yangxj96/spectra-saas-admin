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
                <el-form ref="ruleFormRef" label-width="60px" :model="user" :rules="rules">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="user.username" placeholder="请输入账号"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="user.password" placeholder="请输入密码" show-password/>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <el-button type="primary" @click="handleLogin(ruleFormRef)">
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
import {reactive, ref} from "vue";
import type {FormInstance, FormRules} from "element-plus";

@Options({})
export default class Login extends Vue {

    public userStore = useStore().user;

    public user: User = {
        username: '',
        password: ''
    }

    // 名字需要对应表单上的ref
    public ruleFormRef = ref<FormInstance>();

    // 表单检查规则
    public rules = reactive<FormRules>({
        username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
        ]
    });

    // 登录事件处理
    public async handleLogin(formEl: FormInstance | undefined) {
        if (!formEl) {
            return;
        }
        await formEl.validate((valid, fields) => {
            if (valid) {
                UserApi.login(this.user.username, this.user.password).then((r: any) => {
                    let res = r as Token;
                    let msg = res ? '登录成功' : '登录失败';
                    this.$message.success({
                        ...MessageDefaultConfig,
                        message: msg,
                        onClose: () => {
                            this.userStore.setToken(r);
                            this.$router.push({path: '/'});
                        }
                    })
                });
            } else {
                this.$message.error({
                    ...MessageDefaultConfig,
                    message: '请检查输入'
                })
            }
        });
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
