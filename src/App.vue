<template>
  <div id="nav">
    <el-config-provider :locale="locale" :message="message">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppStore from "@/plugin/store/modules/useAppStore";
import useUserStore from "@/plugin/store/modules/useUserStore";
import UserApi from "@/api/UserApi";
import { MessageDefaultConfig } from "@/utils/DefaultConfig";

export default defineComponent({
  name: "app",
  data() {
    return {
      locale: useAppStore().lang,
      message: { max: 3 }
    };
  },
  methods: {
    refreshToken() {
      clearInterval(useAppStore().checkTokenInterval);
      UserApi.refresh()
        .then(res => {
          if (res.code == 0 && res.data) {
            useUserStore().token = res.data;
          } else {
            this.reload();
          }
        })
        .catch(() => this.reload());
    },
    reload() {
      this.$message.success({
        ...MessageDefaultConfig,
        message: "获取token失败",
        onClose: () => {
          window.localStorage.clear();
          window.sessionStorage.clear();
          location.reload();
        }
      });
    }
  },
  mounted() {
    // useUserStore().$subscribe((mutation, state) => {
    //   if (state.token.access_token != undefined) {
    //     useAppStore().checkTokenInterval = setInterval(() => {
    //       UserApi.check()
    //         .then(res => {
    //           if (res.code != 0) {
    //             this.refreshToken();
    //           }
    //         })
    //         .catch(() => this.refreshToken());
    //     }, 5000);
    //   }
    // });
  },
  unmounted() {
    if (useAppStore().checkTokenInterval != 0) {
      clearInterval(useAppStore().checkTokenInterval);
    }
  }
});
</script>

<style lang="scss">
@use "@/assets/css/common.scss";

* {
  padding: 0;
  margin: 0;
}
</style>
