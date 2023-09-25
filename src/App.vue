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
  mounted() {
    useUserStore().$subscribe((mutation, state) => {
      if (state.token.access_token != undefined) {
        useAppStore().checkTokenInterval = setInterval(async () => {
          // 检查token是否有效
          await UserApi.check().catch(async () => {
            // 刷新token
            await UserApi.refresh()
              .then(res => {
                if (res.code === 0) {
                  if (res.data) {
                    this.$message.success({
                      ...MessageDefaultConfig,
                      message: "获取token失败",
                      onClose: () => {
                        window.localStorage.clear();
                        window.sessionStorage.clear();
                        location.reload();
                      }
                    });
                  } else {
                    useUserStore().token = res.data;
                  }
                }
              })
              .catch(async () => {
                this.$message.error({
                  ...MessageDefaultConfig,
                  message: "获取token失败",
                  onClose: () => {
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    location.reload();
                  }
                });
              });
          });
        }, 5000);
      }
    });
  },
  unmounted() {
    if (useAppStore().checkTokenInterval != 0) {
      clearInterval(useAppStore().checkTokenInterval);
    }
  }
});
</script>

<style lang="scss">
@import "assets/css/common.scss";

* {
  padding: 0;
  margin: 0;
}
</style>
