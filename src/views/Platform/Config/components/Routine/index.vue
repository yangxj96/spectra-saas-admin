<template>
    <div style="height: 94%">
        <!-- 查询条件 -->
        <el-row style="height: 50px">
            <el-form :inline="true" :model="condition">
                <el-form-item label="配置键">
                    <el-input v-model="condition.key" placeholder="请输入配置键" :clearable="true" />
                </el-form-item>
                <el-form-item label="配置值">
                    <el-input v-model="condition.value" placeholder="请输入配置键" :clearable="true" />
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary">
                            <icons name="icon-search" />
                            查询
                        </el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>

        <!-- 表格 -->
        <el-row style="height: calc(100% - 100px)">
            <el-table :data="table_data" stripe border height="100%" style="width: 100%">
                <el-table-column label="ID" prop="id" width="190" align="center" />
                <el-table-column label="配置键" prop="key" align="center" />
                <el-table-column label="配置值" prop="value_str" align="center" />
                <el-table-column label="值类型" prop="type_str" align="center" />
                <el-table-column label="说明" prop="remark" align="center" />
                <el-table-column label="操作" width="130" align="center">
                    <template #default="datum">
                        <el-button text type="primary" @click="onEditorConfig(datum.row)">
                            <icons name="icon-edit" />
                            &nbsp;编辑
                        </el-button>
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
                :layout="'sizes,prev,pager,next'"
                :total="pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </el-row>

        <Editor v-if="options.editor.datum.id" :datum="options.editor.datum" />
    </div>
</template>

<script lang="ts" setup>
    import { useTable } from "@/hooks/UseTable";
    import AccountApi from "@/api/AccountApi";
    import Editor from "@/views/Platform/Config/components/Routine/components/Editor/index.vue";
    import Icons from "@/components/common/Icons.vue";
    import { ref } from "vue";

    const { table_data, pagination, handleCurrentChange, handleSizeChange } = useTable(AccountApi.page);

    const options = ref({
        editor: {
            datum: {} as SystemConfig
        }
    });

    const condition = ref({
        key: "",
        value: undefined
    });

    function onEditorConfig(row: SystemConfig) {
        options.value.editor.datum = row;
    }
</script>
