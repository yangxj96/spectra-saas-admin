<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "tenant-register",
  data() {
    return {
      title: "租户注册" as string
    };
  },
  created() {
    if (this.$route.query.id) {
      this.title = "租户详情";
    }
  }
});
</script>
