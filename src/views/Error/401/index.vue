<template>
    <el-result icon="error" title="404" sub-title="无权访问该页面,3秒后自动后退">
        <template #extra>
            <el-button type="primary">后退</el-button>
        </template>
    </el-result>
</template>


<script lang="ts">

import {defineComponent} from 'vue';

export default defineComponent({
    name: "error-401",
    data(){
        return{
            time: -1
        }
    },
    created() {
        this.time = setTimeout(()=> {
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
