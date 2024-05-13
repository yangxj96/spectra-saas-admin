<template>
  <el-row class="box-content">
    <p ref="title">这是首页</p>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let title = ref<InstanceType<typeof HTMLDivElement>>();

onMounted(() => {
  title.value!.innerText = "小乌龟提交测2试";
});
</script>

<style scoped lang="scss">
.box-content {
  width: 100%;
  height: 100%;
}
</style>
