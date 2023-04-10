<template>
    <div style="height: 100%">
        <!-- 查询条件 -->
        <el-row style="height: 50px">
            <el-form :inline="true" :model="condition">
                <el-form-item label="配置键">
                    <el-input v-model="condition.key" placeholder="请输入配置键" :clearable="true"/>
                </el-form-item>
                <el-form-item label="配置值">
                    <el-input v-model="condition.value" placeholder="请输入配置键" :clearable="true"/>
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary" icon="Search">查询</el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>

        <!-- 表格 -->
        <el-row style="height: calc(100% - 100px)">
            <!-- @formatter:off -->
            <el-table :data="table_data" stripe border  height="100%" style="width: 100%" >

                <el-table-column label="ID"    prop="id" width="140" align="center"/>
                <el-table-column label="配置键" prop="key" align="center"/>
                <el-table-column label="配置值" prop="value_str" align="center"/>
                <el-table-column label="说明"   prop="remark" align="center"/>
                <el-table-column label="操作" width="130" align="center">
                    <template #default="datum">
                        <el-button :icon="'Edit'" text type="primary" @click="onEditorConfig(datum.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- @formatter:on -->
        </el-row>

        <!-- 分页 -->
        <el-row style="float: right;height: 50px">
            <el-pagination
                v-model:currentPage="pagination.page"
                hide-on-single-page
                background
                :page-sizes="pagination.page_sizes"
                :layout="'sizes,prev, pager, next'"
                :total="pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </el-row>

        <Editor v-if="options.editor.datum.id" :datum="options.editor.datum" @close="initData"/>

    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import table from "@/mixins/Table";
import {SystemConfig} from "@/api/SystemApi";
import Editor from "@/views/System/Config/components/Editor/index.vue";
import CommonUtils from "@/utils/CommonUtils";

export default defineComponent({
    name: 'system-config',
    mixins: [table],
    components: {
        Editor
    },
    data() {
        return {
            condition: {
                key: '',
                value: undefined
            },
            options: {
                editor: {
                    datum: {} as SystemConfig
                }
            }
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            this.options.editor.datum = {} as SystemConfig;
            this.table_data = [
                {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    key: 'sys.default.password',
                    type: 1,
                    value: '123456',
                    value_str: '123456',
                    remark: '默认密码'
                },
                {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    key: 'sys.default.avatar',
                    type: 1,
                    value: '/api/file/oss/default/avatar.png',
                    value_str: '/api/file/oss/default/avatar.png',
                    remark: '默认头像地址'
                },
                {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    key: 'sys.default.gender',
                    type: 2,
                    value: '0',
                    value_str: '男',
                    remark: '默认性别',
                    items: [
                        {name: '男', value: 0},
                        {name: '女', value: 1},
                        {name: '未知', value: 2}
                    ]
                },
                {
                    id: CommonUtils.getRandom(10000000, 99999999),
                    key: 'sys.default.free_modules',
                    type: 3,
                    value: '0,1',
                    value_str: 'OA,管理',
                    remark: '默认的免费模块',
                    items: [
                        {name: 'OA', value: 0},
                        {name: '管理', value: 1},
                        {name: 'OSS', value: 2}
                    ]
                }
            ]
        },
        onEditorConfig(row: SystemConfig) {
            this.options.editor.datum = row;
        }

    }
})

</script>

<style scoped lang="scss">

.box-content {

    height: 95%;

    .tree {
        border-right: 1px var(--el-border-color) solid;
    }
}

.yaml-editor {
    height: 100%;
    position: relative;
}

:deep(.yaml-editor > .CodeMirror ) {
    height: auto;
    min-height: 300px;
}


:deep(.yaml-editor  > .CodeMirror-scroll ) {
    min-height: 300px;
}

:deep(.yaml-editor > .cm-s-rubyblue span.cm-string) {
    color: #F08047;
}

</style>
