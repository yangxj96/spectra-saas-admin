<template>
    <div v-auth="'alibaba'">首页</div>
    <a href="https://github.com/login/oauth/authorize?client_id=25536165206c12d1f6fe">github登录</a>
</template>

<script lang="ts">
import {Vue, Options} from "vue-property-decorator";

@Options({})
export default class Home extends Vue {
    created() {

    }
}
</script>

<style scoped>

</style>
