<template>
  <div style="height: 100%">
    模块管理
    <el-button @click="handleGo">跳转</el-button>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "SystemModule",
  methods: {
    handleGo() {
      this.$router.push({
        path: "/123233"
      });
    }
  }
});
</script>

<style scoped lang="scss"></style>
