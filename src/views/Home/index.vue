<template>
    <el-table :data="tableData">
        <el-table-column :show-overflow-tooltip="true" prop="name" width="50" label="ceshi" />
    </el-table>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    const tableData = ref([
        {
            name: "12333333333333333333333333333"
        }
    ]);
</script>

<style scoped lang="scss">
    .box-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
