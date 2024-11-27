<template>
  <el-row align="top" style="width: 100%; padding-bottom: 5px">
    <el-col :span="2">
      <img
        v-if="!is_me"
        src="/src/assets/images/default-avatar.jpg"
        alt="default avatar"
        style="object-fit: cover; float: right"
        class="el-avatar el-avatar--square" />
    </el-col>
    <el-col :span="20" style="padding-right: 10px; padding-left: 10px">
      <el-card :class="is_me ? 'box-msg box-me' : 'box-msg'" :style="is_me ? 'float: right' : 'float: left'">
        {{ msg }}
      </el-card>
    </el-col>
    <el-col :span="2">
      <img
        v-if="is_me"
        src="/src/assets/images/default-avatar.jpg"
        alt="default avatar"
        style="object-fit: cover; float: left"
        class="el-avatar el-avatar--square" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonUtils from "@/utils/CommonUtils";

export default defineComponent({
  name: "ImMessageItem",
  props: {
    is_me: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  created() {
    let number_ = CommonUtils.getRandom(1, 50);
    for (let index = 0; index < number_; index++) {
      this.msg += "🙂";
    }
  }
});
</script>

<style scoped lang="scss">
.box-msg {
  max-width: 94%;
  padding: 10px;
  display: inline-block;
}

.box-me {
  background-color: var(--el-color-primary);
}
</style>
