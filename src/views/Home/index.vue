<template>
    <div v-auth="'alibaba'" >首页</div>
    <a href="https://github.com/login/oauth/authorize?client_id=25536165206c12d1f6fe">github登录</a>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    setup(props) {
        console.log('props:', props);
        return {};
    }
});
</script>

<style scoped>

</style>
