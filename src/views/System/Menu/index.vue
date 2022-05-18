<template>
    <el-row>
        <el-form :inline="true">
            <el-form-item label="菜单项名称">
                <el-input placeholder="请输入菜单项名称"/>
            </el-form-item>
            <el-form-item>
                <el-button-group>
                    <el-button type="primary" icon="Search"     >查询</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </el-row>

    <el-divider style="margin: 0" />

    <el-row class="box-content">
        <!-- 菜单树 -->
        <el-col :span="6" class="tree">
            <el-tree ref="group_tree" :data="tree_data" :props="{children:'children',label:'name'}"/>
        </el-col>
        <!-- 菜单信息 -->
        <el-col :span="18">
            <el-form :model="menu_details" label-width="120px" style="margin-top: 1%">
                <el-form-item label="名称">
                    <el-input v-model="menu_details.name" />
                </el-form-item>
                <el-form-item label="编码">
                    <el-input v-model="menu_details.name" />
                </el-form-item>
                <el-form-item label="是否启用">
                    <el-switch />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :icon="'Edit'">保存</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";

@Options({})
export default class Menu extends Vue {

    public menu_details: any = {}

    // 树数据
    public tree_data: TreeData[] = [
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

    }


}

/**
 * 树结构
 */
interface TreeData {
    name: string
    children?: TreeData[]
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
