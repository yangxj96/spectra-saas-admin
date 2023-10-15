<template>
  <el-row align="top" class="box-item">
    <el-card class="box-msg" shadow="always">
      {{ msg }}
    </el-card>

    <img
      src="/src/assets/images/default-avatar.jpg"
      alt="default avatar"
      style="object-fit: cover; margin-left: 80px; margin-bottom: 10px"
      class="box-avatar el-avatar el-avatar--circle el-tooltip__trigger" />
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonUtils from "@/utils/CommonUtils";

export default defineComponent({
  name: "ImMessageItem",
  data() {
    return {
      msg: ""
    };
  },
  created() {
    let num = CommonUtils.getRandom(1, 150);
    for (let i = 0; i < num; i++) {
      this.msg += "🙂";
    }
  }
});
</script>

<style scoped lang="scss">
.box-item {
  width: 100%;
  margin-top: 10px;
  justify-content: flex-end;

  .box-avatar {
    display: inline;
  }

  .box-msg {
    border: 1px solid var(--el-color-primary);
    display: inline;
    margin-right: 10px;
    background-color: var(--el-color-primary);
    padding: 10px;
    max-width: 70%;
  }
}
</style>
