<template>
    <div style="height: 100%">
        <!-- 查询条件 -->
        <el-row style="height: 50px">
            <el-form :inline="true" :model="condition">
                <el-form-item label="公司名称">
                    <el-input v-model="condition.company_name" placeholder="请输入公司名称" :clearable="true"/>
                </el-form-item>
                <el-form-item label="冻结状态">
                    <el-select v-model="condition.enable" placeholder="请选择冻结状态" :clearable="true">
                        <el-option label="正常" :value="true"/>
                        <el-option label="冻结" :value="false"/>
                    </el-select>
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
            <el-table :data="table_data" stripe border  height="100%" style="width: 100%" @cell-dblclick="onTableCellDbClick">
                <el-table-column label="ID"    prop="id" width="140" align="center"/>
                <el-table-column label="配置键" prop="key" align="center"/>
                <el-table-column label="配置值" align="center">
                    <template #default="datum">
                        <div v-if="form.row === datum.row.id && form.col === datum.column.id">
                            <el-input v-model="form.temp.value" v-focus @keyup.enter="onTableCellInputEnter"  @blur="onUpdateConfig"/>
                        </div>
                        <div v-else>
                            {{datum.row.value}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="说明" align="center">
                    <template #default="datum">
                        <div v-if="form.row === datum.row.id && form.col === datum.column.id">
                            <el-input v-model="form.temp.remark" v-focus @keyup.enter="onTableCellInputEnter"  @blur="onUpdateConfig"/>
                        </div>
                        <div v-else>
                            {{datum.row.remark}}
                        </div>
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
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import table from "@/mixins/Table";

export default defineComponent({
    name: 'system-config',
    mixins: [table],
    data() {
        return {
            condition: {
                company_name: '',
                enable: undefined
            },
            options: {},
            form: {
                row: '',
                col: '',
                temp: {}
            }
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData(){
            this.table_data = [];
            for (let i = 0; i < 14; i++) {
                let datum: TableData = {
                    id: 10000000000 + i,
                    key: 'sys.default.password',
                    value: '123456',
                    remark: '默认密码'
                }
                this.table_data.push(datum);
            }
        },
        // 解决cell编辑完后点击回车会导致出发两次,应为blur事件也是同样的处理方式
        // 网上的根据$event.target.blur不适用,可能是js和ts环境的问题
        onTableCellInputEnter(e:InputEvent){
            (e.target as HTMLElement).blur();
        },
        onTableCellDbClick(row: any, column: any) {
            this.form.row = row.id;
            this.form.col = column.id;
            this.form.temp = row;
        },
        onUpdateConfig() {
            console.log('临时数据',this.form.temp)
            this.initData();
            //清空数据
            this.form.temp = {}
            this.form.row = ''
            this.form.col = ''
        }
    }
})

interface TableData {
    id: number,
    key: string,
    value: string,
    remark?: string
}

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
