<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref("租户注册");

onMounted(() => {
  if (route.query.id) {
    title.value = "租户详情";
  }
});
</script>
