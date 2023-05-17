<template>
  <div class="box">
    <el-dialog :model-value="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" class="dialog-login" width="20%">
      <template #header>
        <p>
          <icons name="icon-login" style="color: #9b9b9b" />
          用户登录
        </p>
      </template>
      <div>
        <el-form ref="ruleFormRef" label-width="60px" :model="user" :rules="rules">
          <el-form-item label="账号" prop="username">
            <el-input v-model="user['username']" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="user['password']" placeholder="请输入密码" show-password />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button type="primary" @click="handleLogin">
          <icons name="icon-login" />
          <span>&nbsp;登录</span>
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { type FormInstance, type FormRules } from "element-plus";

export default defineComponent({
  name: "Login",
  data() {
    return {
      user: {
        username: "sysadmin",
        password: "sysadmin"
      } as User,
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      } as FormRules
    };
  },
  methods: {
    async handleLogin() {
      let el = this.$refs.ruleFormRef as FormInstance;
      if (!el) {
        return;
      }
      await el.validate(valid => {
        if (valid) {
          UserApi.login(this.user.username, this.user.password).then(res => {
            if (res.code === 0) {
              this.$message.success({
                ...MessageDefaultConfig,
                message: "登录成功",
                onClose: () => {
                  useUserStore().token = res.data;
                  this.$router.push({ path: "/" });
                }
              });
            } else {
              this.$message.error({ message: res.msg });
            }
          });
        } else {
          this.$message.error({
            ...MessageDefaultConfig,
            message: "请检查输入"
          });
        }
      });
    }
  }
});

interface User {
  username: string;
  password: string;
}
</script>

<style scoped lang="scss">
.box {
  height: 100vh;
  background: url("~@/assets/images/background-login.jpg") no-repeat;
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
