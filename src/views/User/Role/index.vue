<template>
    <div style="height: 100%">
        <!-- 查询条件 -->
        <el-row style="height: 50px">
            <el-form :inline="true">
                <el-form-item label="角色名称:">
                    <el-input placeholder="请输入角色名称" :clearable="true" />
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary" @click="handleSearchRole">
                            <icons name="icon-search" />
                            &nbsp;查询
                        </el-button>
                        <el-button type="primary" @click="handleShowDialog(true)">
                            <icons name="icon-add" />
                            &nbsp;新增
                        </el-button>
                        <el-button type="primary" @click="handleShowDialog(false)">
                            <icons name="icon-edit" />
                            &nbsp;编辑
                        </el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>
        <!-- 表格 -->
        <el-row style="height: calc(100% - 100px)">
            <el-table
                :data="table_data"
                stripe
                border
                highlight-current-row
                height="100%"
                style="width: 100%"
                @row-click="(row: any) => (current = row)">
                <el-table-column align="center" type="index" width="50" />
                <el-table-column align="center" prop="id" width="190" label="ID" />
                <el-table-column align="center" prop="name" label="角色名称" />
                <el-table-column align="center" prop="code" label="角色代码" />
                <el-table-column align="center" prop="description" label="角色说明" />
                <el-table-column align="center" prop="internal" label="是否内置">
                    <template #default="scope">
                        <el-tag :type="scope.row.internal ? 'success' : ''">
                            {{ scope.row.internal ? "是" : "否" }}
                        </el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <!-- 分页 -->
        <el-row style="float: right; height: 50px">
            <el-pagination
                v-model:currentPage="pagination.page"
                hide-on-single-page
                background
                :page-sizes="pagination.page_sizes"
                :layout="'sizes,prev, pager, next'"
                :total="pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </el-row>
    </div>
</template>

<script lang="ts" setup>
    import { ElMessage, ElTable } from "element-plus/es";
    import { ref } from "vue";
    import { useTable } from "@/hooks/UseTable";
    import RoleApi from "@/api/RoleApi";

    const current = ref<Role>();

    const { table_data, pagination, handleSizeChange, handleCurrentChange } = useTable(RoleApi.page);

    function handleSearchRole() {
        console.log(`handleSearchRole`);
    }

    function handleShowDialog(created: boolean) {
        console.log(current.value);
        if (!created && JSON.stringify(current.value) === "{}") {
            ElMessage.error({
                message: "请先选中一个角色"
            });
        }
    }
</script>

<style scoped lang="scss">
    .box-content {
        height: 95%;

        .tree {
            border-right: 1px var(--el-border-color) solid;
        }
    }
</style>
