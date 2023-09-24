<template>
  <el-row class="box-content">
    <div v-authority="'_ROLE_SYSADMIN'">有权限</div>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>

<style scoped lang="scss">
.box-content {
  width: 100%;
  height: 100%;
}
</style>
