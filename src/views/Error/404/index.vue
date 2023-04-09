<template>
    <el-result icon="error" title="404" sub-title="对不起,找不到页面,3秒后自动后退">
        <template #extra>
            <el-button type="primary">后退</el-button>
        </template>
    </el-result>
</template>


<script lang="ts">

import {defineComponent} from 'vue';

export default defineComponent({
    name: "error-404",
    data(){
        return{
            time: -1 as number
        }
    },
    created() {
        this.time = window.setTimeout(()=> {
            this.$router.back();
        },3000)
    },
    unmounted() {
        clearTimeout(this.time)
    }
})
</script>

<style scoped>

</style>
