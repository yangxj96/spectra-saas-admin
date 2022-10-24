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
import SystemApi, {SystemConfig} from "@/api/SystemApi";
import {AxiosResponse} from "axios";
import {IResult} from "@/plugin/request";
import Editor from "@/views/System/Config/components/Editor/index.vue";

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
            SystemApi.getSystemConfig().then((response: AxiosResponse<IResult<SystemConfig[]>>) => {
                this.table_data = response.data.data;
            })
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
