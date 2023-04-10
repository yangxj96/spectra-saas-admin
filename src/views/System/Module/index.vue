<template>
    <div style="height: 100%">
        模块管理
        <el-button @click="handleGo">跳转</el-button>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
    methods:{
        handleGo(){
            this.$router.push({
                path: '/123233'
            })
        }
    }
})

interface XlsxData {
    Shape_Type: string,
    Name: string,
    Type: string,
    latitude: number,
    longitude: number,
    altitude: number
}

</script>

<style scoped lang="scss">

</style>
