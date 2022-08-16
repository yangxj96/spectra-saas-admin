<template>
    <el-row>
        <el-form :inline="true">
            <el-form-item label="角色名称">
                <el-input placeholder="请输入角色名称"/>
            </el-form-item>
            <el-form-item>
                <el-button-group>
                    <el-button type="primary" icon="Search">查询</el-button>
                    <el-button type="primary" icon="FolderAdd" @click="handleCreateRole">新增角色</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </el-row>

    <el-divider style="margin: 0"/>

    <el-row class="box-content">
        <!-- 字典组树 -->
        <el-col :span="4" class="tree">
            <el-tree ref="group_tree" :data="tree_data" :props="{children:'children',label:'name'}"/>
        </el-col>
        <!-- 字典项表格 -->
        <el-col :span="10">
            <el-tree :data="authority_data" show-checkbox :props="{children:'children',label:'name'}"/>
        </el-col>
        <!-- 说明 -->
        <el-col :span="10">

        </el-col>
    </el-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    data() {
        const tree_data: TreeData[] = [
            {
                name: '管理员',
                children: [{name: '子管理员1'}, {name: '子管理员2'}],
            }
        ];
        const authority_data: TreeData[] = [
            {
                name: '人员管理',
                children: [{name: '新增'}, {name: '修改'}, {name: '删除'}, {name: '查询'}],
            },
            {
                name: '组织机构管理',
                children: [{name: '新增'}, {name: '修改'}, {name: '删除'}, {name: '查询'}],
            },
            {
                name: '菜单管理',
                children: [{name: '新增'}, {name: '修改'}, {name: '删除'}, {name: '查询'}],
            }
        ]
        return {
            tree_data: tree_data,
            authority_data: authority_data
        }
    },
    methods: {
        // 处理角色新增
        handleCreateRole() {
            let el: any = this.$refs.group_tree;
            let node = el.getCurrentNode();
            if (node) {
                this.$confirm(`是否新建在<<${node.name}>>的下级`, '', {
                    cancelButtonText: '否',
                    confirmButtonText: '是'
                });
            }
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
