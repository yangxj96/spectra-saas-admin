<template>
  <el-row align="top" class="box-item">
    <el-card class="box-msg" shadow="always">
      {{ msg }}
    </el-card>

    <el-avatar class="box-avatar" :src="getAssets('../assets/images/default-avatar.jpg')" />
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
      this.msg += "🙂";
    }
  },
  methods: {
    getAssets
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
