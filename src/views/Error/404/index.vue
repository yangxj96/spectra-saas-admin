<template>
  <el-result icon="error" title="404" :sub-title="`对不起,找不到页面,${second}秒后自动后退`">
    <template #extra>
      <el-button type="primary" @click="handleBack">后退</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
export default defineComponent({
  name: "Error404",
  data() {
    return {
      time: -1 as number,
      second: 3 as number
    };
  },
  created() {
    this.time = window.setInterval(() => {
      this.second--;
      if (this.second <= 0) {
        this.$router.back();
      }
    }, 1000);
  },
  methods: {
    handleBack() {
      if (this.time != -1) {
        clearTimeout(this.time);
      }
      this.$router.back();
    }
  },
  unmounted() {
    clearTimeout(this.time);
  }
});
</script>

<style scoped></style>
