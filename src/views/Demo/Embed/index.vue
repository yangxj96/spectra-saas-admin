<template>
    <iframe ref="content" :allow="allow" :src="src" :title="title" />
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    const src = ref("https://www.yangxj96.com");
    const allow = ref("fullscreen 'none'; payment 'none'");
    const title = ref("module name");
</script>

<style scoped lang="scss">
    iframe {
        height: 98%;
        width: 100%;
    }
</style>
