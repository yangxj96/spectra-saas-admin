<template>
    <el-result icon="error" title="404" :sub-title="`对不起,找不到页面,${this.second}秒后自动后退`">
        <template #extra>
            <el-button type="primary">后退</el-button>
        </template>
    </el-result>
</template>


<script lang="ts">

import {defineComponent} from 'vue';

export default defineComponent({
    name: "error-404",
    data() {
        return {
            time: -1 as number,
            second: 3 as number
        }
    },
    created() {
        this.time = window.setInterval(() => {
            this.second--;
            if (this.second <= 0) {
                this.$router.back();
            }
        }, 1000)
    },
    unmounted() {
        clearTimeout(this.time)
    }
})
</script>

<style scoped>

</style>
