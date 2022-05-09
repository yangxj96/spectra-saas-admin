<template>
    <el-row>
        <el-form :inline="true" class="search-tool">
            <el-form-item label="字典项名称">
                <el-input placeholder="请输入字典项名称"/>
            </el-form-item>
            <el-form-item>
                <!--<el-button type="primary">查询</el-button>-->
                <el-button-group>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">新增字典组</el-button>
                    <el-button type="primary">新增字典项</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </el-row>
    <el-row class="box-content">

        <el-col :span="4" class="tree">
            <el-tree :data="tree_data" :props="{children:'children',label:'name'}"/>
        </el-col>

        <el-col :span="20" class="table">
            <el-row style="height: 90.8%">
                <el-table :data="table_data" style="width: 100%" stripe>
                    <el-table-column type="index" align="center" label="序号" width="80"/>
                    <el-table-column prop="code" align="center" label="code"/>
                    <el-table-column prop="name" align="center" label="名称"/>
                    <el-table-column prop="value" align="center" label="值"/>
                    <el-table-column label="是否启用" align="center">
                        <template #default="scope">
                            <el-switch v-model="scope.row.enable"/>
                        </template>
                    </el-table-column>
                    <el-table-column label="系统内置" align="center">
                        <template #default="scope">
                            <el-tag :type="scope.row.internal ? 'success' : 'danger'">
                                {{ scope.row.internal ? '是' : '否' }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template #default="scope">
                            <el-button type="text">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
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
        </el-col>
    </el-row>
</template>

<script lang="ts">

import {Options, mixins} from "vue-property-decorator";
import Table from "@/mixins/Table";

@Options({})
export default class Dict extends mixins(Table) {

    // 树数据
    private tree_data: TreeData[] = [
        {
            name: '人物',
            children: [{name: '性别'}, {name: '学历'}],
        },
        {
            name: '层级2',
            children: [{name: '层级2-1', children: [{name: '层级2-1-1',}]}],
        },
        {
            name: '层级3',
            children: [{name: '层级3-1', children: [{name: '层级3-1-1',}]}],
        }
    ];

    created() {
        this.handleTableData([]);
    }

    /**
     * 处理表单数据
     * @param data
     */
    public handleTableData(data: Array<TableData>) {
        // this.table_data = data;
        this.table_data = [];
        for (let i = 0; i < 10; i++) {
            this.table_data.push(
                {id: '100', code: 'xxxxxxx', name: '项目1', value: '1', internal: true, enable: true}
            )
        }
    }

}

/**
 * 树结构
 */
interface TreeData {
    name: string
    children?: TreeData[]
}

// 表格数据结构
interface TableData {
    id: string,
    code: string,
    name: string,
    value: string,
    internal: boolean,
    enable: boolean
}


</script>

<style scoped lang="scss">
.search-tool {
    height: 5%;
    width: 100%;

    .el-form-item {
        margin-bottom: 20px;
    }
}

.box-content {
    height: 95%;

    .tree {
        border-right: 1px var(--el-border-color) solid;
    }
}
</style>
