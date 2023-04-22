<template>
    <div style="height: 100%">
        <el-row>
            <el-form :inline="true">
                <el-form-item label="字典项名称">
                    <el-input placeholder="请输入字典项名称"/>
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary"><el-icon><IconSearch/></el-icon>&nbsp;查询</el-button>
                        <el-button type="primary" @click="handleCreateDictGroup"><el-icon><IconFolder/></el-icon>&nbsp;新增组</el-button>
                        <el-button type="primary" @click="handleCreateDictItem"><el-icon><IconFile/></el-icon>&nbsp;新增项</el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>

        <el-divider style="margin: 0"/>

        <el-row class="box-content">
            <!-- 字典组树 -->
            <el-col :span="4" class="tree">
                <el-tree ref="group_tree"
                         :data="tree_data"
                         :props="{children:'children',label:'name'}"
                         @node-click="onDictGroupClick"
                />
            </el-col>
            <!-- 字典项表格 -->
            <el-col :span="20">
                <el-row style="height: 90.8%">
                    <el-table :data="table_data" style="width: 100%" stripe>
                        <el-table-column type="index" align="center" label="序号" width="80"/>
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
                                <el-button text type="primary">修改</el-button>
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
                        :layout="'sizes,prev,pager,next'"
                        :total="pagination.total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import Table from "@/mixins/Table";
import {SystemDictGroup} from "@/model/System";

export default defineComponent({
    name: 'dict',
    mixins: [Table],
    data() {
        const table_data: TableData[] = [];
        return {
            tree_data: [] as SystemDictGroup[],
            table_data: table_data,
        }
    },
    created() {
        this.handleTableData();
        this.initData()
    },
    methods: {
        initData() {
            this.tree_data = [
                {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    name: '人物',
                    children: [
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '性别'
                        },
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '学历'
                        }
                    ]
                }, {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    name: '人物',
                    children: [
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '性别'
                        },
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '学历'
                        }
                    ]
                }, {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    name: '人物',
                    children: [
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '性别'
                        },
                        {
                            id: CommonUtils.getRandom(10000000, 99999999),
                            name: '学历'
                        }
                    ]
                }

            ]
        },
        handleTableData() {
            this.table_data = [];
            for (let i = 0; i < 10; i++) {
                this.table_data.push({
                    id: '100',
                    name: '项目1',
                    value: '1',
                    internal: true,
                    enable: true
                })
            }
        },
        handleCreateDictGroup() {
            let el: any = this.$refs.group_tree;
            let node = el.getCurrentNode();
            console.log(node);
            if (node) {
                // this.$confirm(`是否新建在${node.name}的下级`);
                this.$confirm(`是否新建在${node.name}的下级`, '', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定'
                });
            }
        },
        handleCreateDictItem() {
            this.$message.success('开发中');
        },
        // 字典组被单击事件
        onDictGroupClick(o: any, node: any, tn: any, e: PointerEvent) {
            console.log(`o`, o)
            console.log(`node`, node)
            console.log(`tn`, tn)
            console.log(`e`, e)
        }
    }
})

// 树结构
interface TreeData {
    name: string
    children?: TreeData[]
}

// 表格数据结构
interface TableData {
    id: string,
    name: string,
    value: string,
    internal: boolean,
    enable: boolean
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
