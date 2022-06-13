<template>
    <div class="box">
        <el-dialog :model-value="true"
                   :close-on-click-modal="false"
                   :close-on-press-escape="false"
                   :show-close="false"
                   custom-class="dialog-login"
                   width="20%">
            <template #title>
                <p>
                    <icon-font :icon-href="'icon-login'"/>
                    用户登录
                </p>
            </template>
            <div>
                <el-form label-width="60px">
                    <el-form-item label="用户名">
                        <el-input/>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input/>
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
import Socket from "@/utils/Socket";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";
import userApi from "@/api/UserApi";
import IResult from "@/entity/IResult";

@Options({})
export default class Login extends Vue {

    private socket?: Socket | null;

    // 组件创建钩子
    public created() {
        //  websocket
        // this.socket = new Socket('ws://127.0.0.1:8080/api/websocket/alarm', {
        //     handleMessage(e: string) {
        //         console.log(`外部定义的处理方式,消息是:${e}`)
        //     }
        // });
    }

    // 组件销毁钩子
    public unmounted() {
        this.socket?.destroy();
    }

    // 登录事件处理
    handleLogin() {
        userApi.login("admin", "admin").then(r => {
            console.log(typeof r);
            if (r.code == 0) {
                // this.$message.success({
                //     ...MessageDefaultConfig,
                //     message: '测试',
                //     onClose: () => {
                //         this.$store.dispatch('user/setToken', 'token');
                //         this.$router.push({path: '/'});
                //     }
                // })
            }
        })

    }
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
