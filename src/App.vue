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
import CommonUtils from "@/utils/CommonUtils";

export default defineComponent({
  name: "app",
  data() {
    return {
      locale: useAppStore().lang,
      message: { max: 500 },
      checkToken: 0 as any
    };
  },
  mounted() {
    useUserStore().$subscribe((mutation, state) => {
      if (state.token.access_token != undefined) {
        this.checkToken = setInterval(async () => {
          // 检查token是否有效
          await UserApi.check().then(async res => {
            if (res.code == 0 && CommonUtils.getRandom(1, 2000) / 2 === 0) {
              // 刷新token
              await UserApi.refresh().then(res => {
                if (res.code === 0) {
                  useUserStore().token = res.data;
                }
              });
            }
          });
        }, 5000);
      }
    });
  },
  unmounted() {
    if (this.checkToken != 0) {
      clearInterval(this.checkToken);
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
