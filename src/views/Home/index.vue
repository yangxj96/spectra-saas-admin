<template>
  <el-row class="box-content">
    <p ref="title">这是首页</p>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let title = ref<InstanceType<typeof HTMLDivElement>>();

onMounted(() => {
  console.log("输出日志", title);
  title.value!.innerText = "ok";
});
</script>

<style scoped lang="scss">
.box-content {
  width: 100%;
  height: 100%;
}
</style>
