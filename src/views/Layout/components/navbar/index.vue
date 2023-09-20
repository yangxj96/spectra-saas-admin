<template>
  <el-row>
    <el-col :span="3">
      <img src="/assets/logo-across.png" class="goto-home" @click="gotoHome" alt="logo" style="height: 56px" />
    </el-col>

    <el-col :span="20" style="padding-right: 40px">
      <el-button link @click="handleToggleIMState" style="line-height: 100%; height: 100%; float: right">
        <icons name="icon-IM" style="width: 1.3em; height: 1.3em" />
      </el-button>
    </el-col>

    <el-col :span="1">
      <el-dropdown>
        <el-avatar src="/assets/images/default-avatar.jpg" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handlePersonalPopup">
              <icons name="icon-user" class-name="icon-navbar" />
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item @click="handleModifyPasswordPopup">
              <icons name="icon-change-password" class-name="icon-navbar" />
              <span>修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item @click="handleUserLogout">
              <icons name="icon-logout" class-name="icon-navbar" />
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
  <personal-details />
  <change-password />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MessageDefaultConfig } from "@/utils/DefaultConfig";
import usePropsStore from "@/plugin/store/modules/usePropsStore";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import Icons from "@/components/common/Icons.vue";
import PersonalDetails from "@/components/Props/PersonalDetails/index.vue";
import ChangePassword from "@/components/Props/ChangePassword/index.vue";

export default defineComponent({
  name: "LayoutNavbar",
  components: { Icons, PersonalDetails, ChangePassword },
  methods: {
    gotoHome() {
      this.$router.push({ path: "/" });
    },
    handleUserLogout() {
      this.$message.success({
        ...MessageDefaultConfig,
        message: "退出成功",
        onClose: () => {
          window.localStorage.clear();
          window.sessionStorage.clear();
          location.reload();
        }
      });
    },
    handleModifyPasswordPopup() {
      usePropsStore().change_password = true;
    },
    handlePersonalPopup() {
      usePropsStore().personal_details = true;
    },
    handleToggleIMState() {
      useSystemStore().IM = true;
    }
  }
});
</script>

<style scoped lang="scss">
.goto-home {
  cursor: pointer;
}

.el-menu.el-menu--horizontal {
  border: 0;
}

:deep(.el-avatar--large) {
  --el-avatar-size: 2.8vw;
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

.icon-navbar {
  width: 1.3em;
  height: 1.3em;
  padding-right: 0.5em;
}

.flex-grow {
  flex-grow: 1;
}

:deep(.el-menu) {
  height: 100%;
}
</style>
