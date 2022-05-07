<template>
    <el-row style="height: 100%">
        <el-col :span="6">
            <el-tree :data="treeData" :props="{children:'children',label:'name'}"/>
        </el-col>

        <el-col :span="18">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="index" width="50"/>
                <el-table-column prop="code"  abel="代码"/>
                <el-table-column prop="name"  label="名称"/>
                <el-table-column prop="value" label="值"/>
                <el-table-column label="是否启用">
                    <template #default="scope">
                        <el-switch v-model="scope.row.internal"/>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts">

import {Vue, Options} from "vue-property-decorator";

@Options({})
export default class Dict extends Vue {

    // 树数据
    private treeData: TreeData[]   = [
        {
            name: '层级1',
            children: [{name: '层级1-1', children: [{name: '层级1-1-1',}]}],
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

    // 表格数据
    private tableData: TableData[] = [
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true},
        {id:'100',code:'xxxxxxx',name:'项目1',value:'1',internal: true}
    ];

    created() {

    }
}

/**
 * 树结构
 */
interface TreeData {
    name: string
    children?: TreeData[]
}

interface TableData {
    id      : string,
    code    : string,
    name    : string,
    value   : string,
    internal: boolean
}


</script>

<style scoped>

</style>
