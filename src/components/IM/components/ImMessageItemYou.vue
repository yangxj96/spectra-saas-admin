<template>
  <el-row align="top" class="box-item">
    <el-avatar class="box-avatar" :src="getAssets('../assets/images/default-avatar.jpg')" />

    <el-card class="box-msg" shadow="always">
      {{ msg }}
    </el-card>
  </el-row>
</template>

<script lang="ts">
import CommonUtils, { getAssets } from "@/utils/CommonUtils";
import { defineComponent } from "vue";

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
      this.msg += "🤣";
    }
  },
  methods: { getAssets }
});
</script>

<style scoped lang="scss">
.box-item {
  width: 100%;
  margin-top: 10px;
  justify-content: flex-start;

  .box-avatar {
    display: inline;
  }

  .box-msg {
    display: inline;
    margin-left: 10px;
    padding: 10px;
    max-width: 70%;
  }
}
</style>
