<template>
  <div id="nav">
    <el-config-provider :locale="locale" :message="message">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import useUserStore from "@/plugin/store/modules/useUserStore";
import useAppStore from "@/plugin/store/modules/useAppStore";
import { ElMessage } from "element-plus";
import UserApi from "@/api/UserApi";
import GlobalUtils from "@/utils/GlobalUtils";

const locale = ref(useAppStore().lang);
const message = reactive({
  max: 3
});

onMounted(() => {
  useUserStore().$subscribe((_mutation, state) => {
    if (state.token.access_token != undefined) {
      useAppStore().checkTokenInterval = setInterval(checkToken, 5000);
    }
  });
});

onUnmounted(() => {
  if (useAppStore().checkTokenInterval != 0) {
    clearInterval(useAppStore().checkTokenInterval);
  }
});

function checkToken() {
  UserApi.check()
    .then(res => {
      if (res.code != 0) {
        refreshToken();
      }
    })
    .catch(() => refreshToken());
}

function refreshToken() {
  clearInterval(useAppStore().checkTokenInterval);
  UserApi.refresh()
    .then(res => {
      if (res.code == 0 && res.data) {
        useUserStore().token = res.data;
      } else {
        reload();
      }
    })
    .catch(() => reload());
}

function reload() {
  ElMessage.error({
    message: "获取token失败",
    onClose: () => {
      GlobalUtils.exit();
    }
  });
}
</script>

<style lang="scss">
@use "@/assets/css/common.scss";

* {
  padding: 0;
  margin: 0;
}
</style>
