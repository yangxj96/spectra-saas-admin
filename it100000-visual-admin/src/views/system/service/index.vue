<template>
    <el-row style="height: 5%">

    </el-row>

    <el-row style="height: 87%">
        <!-- @formatter:off -->
        <el-table :data="table_data" stripe border  height="100%" style="width: 100%">
            <el-table-column label="序号"    type="index" width="80"/>
            <el-table-column label="服务名称" prop="date"  width="180"/>
            <el-table-column label="说明"    prop="name"  width="180" show-overflow-tooltip/>
            <el-table-column label="实例数量" prop="num"   width="120"/>
            <el-table-column label="实例状态" prop="num" />
            <el-table-column label="操作"    fixed="right" width="120">
                <template #default>
                    <el-button type="text" size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- @formatter:on -->
    </el-row>

    <el-row style="float: right;height: 8%">
        <el-pagination
            v-model:currentPage="pagination.page"
            hide-on-single-page
            background
            :page-sizes="pagination.page_sizes"
            layout="sizes,prev, pager, next"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </el-row>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import table from "@/mixins/Table";

export default defineComponent({
    name: "index",
    mixins: [table],
    created() {
        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                date: '用户服务',
                name: '用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务用户服务',
                num: 8,
            });
        }
        this.handleTableData(data);
    },
    data() {
        return {}
    },
    methods: {
        handleTableData(data: object[]) {
            this.table_data = data;
        }
    }
})
</script>

<style scoped lang="scss">


</style>
