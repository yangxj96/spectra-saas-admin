<template>
    <div v-auth="'alibaba'">首页</div>
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

