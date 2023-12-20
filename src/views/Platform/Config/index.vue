<template>
  <div style="height: 100%">
    <el-tabs v-model="active">
      <el-tab-pane name="routine">
        <template #label>
          <icons name="icon-setting" style="color: #4d4d4d" />
          <span>&nbsp;平台属性配置</span>
        </template>
        <routine />
      </el-tab-pane>
      <el-tab-pane name="file">
        <template #label>
          <icons name="icon-file-config" style="color: #4d4d4d" />
          <span>&nbsp;文件存储配置</span>
        </template>
        <file-save />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Icons from "@/components/common/Icons.vue";
import routine from "@/views/Platform/Config/components/Routine/index.vue";
import fileSave from "@/views/Platform/Config/components/FileSave/index.vue";

const active = ref("routine");
</script>

<style scoped lang="scss">
:deep(.el-tabs),
:deep(.el-tabs__content),
:deep(.el-tab-pane) {
  height: 98%;
}
</style>
