<template>
  <div class="box">
    <el-dialog
      :model-value="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      class="dialog-login"
      width="20%">
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
import useUserStore from "@/plugin/store/modules/useUserStore";

export default defineComponent({
  name: "login",
  data() {
    return {
      userStore: useUserStore(),
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
          this.$message.success({
            ...MessageDefaultConfig,
            message: "登录成功",
            onClose: () => {
              this.$router.push({ path: "/" });
            }
          });
          useUserStore().token = {
            username: "sysadmin",
            access_token: "29C02A6F-C886-4668-82A5-4A3139B5D90F",
            refresh_token: "B83C2F7F-D90E-440A-8327-55A2A8CD7422",
            authorities: [
              "ROLE_SYSADMIN",
              "ROLE_ADMIN",
              "ROLE_USER",
              "USER:INSERT",
              "USER:DELETE",
              "USER:UPDATE",
              "USER:SELECT",
              "SYS:CONFIGURE:INSERT",
              "SYS:CONFIGURE:DELETE",
              "SYS:CONFIGURE:UPDATE",
              "SYS:CONFIGURE:SELECT"
            ],
            expiration_time: "2023-04-11 11:58:33"
          };
          // useUserStore().setToken({
          //   username: "sysadmin",
          //   access_token: "29C02A6F-C886-4668-82A5-4A3139B5D90F",
          //   refresh_token: "B83C2F7F-D90E-440A-8327-55A2A8CD7422",
          //   authorities: [
          //     "ROLE_SYSADMIN",
          //     "ROLE_ADMIN",
          //     "ROLE_USER",
          //     "USER:INSERT",
          //     "USER:DELETE",
          //     "USER:UPDATE",
          //     "USER:SELECT",
          //     "SYS:CONFIGURE:INSERT",
          //     "SYS:CONFIGURE:DELETE",
          //     "SYS:CONFIGURE:UPDATE",
          //     "SYS:CONFIGURE:SELECT"
          //   ],
          //   expiration_time: "2023-04-11 11:58:33"
          // });
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
