<template>
    <div style="height: 100%">
        <el-row>
            <el-form :inline="true">
                <el-form-item label="字典项名称">
                    <el-input placeholder="请输入字典项名称"/>
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary" icon="Search">查询</el-button>
                        <el-button type="primary" icon="FolderAdd">新增组</el-button>
                        <el-button type="primary" icon="DocumentAdd">新增项</el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>

        <el-divider style="margin: 0"/>

        <el-row class="box-content">

        </el-row>
    </div>
</template>

<script lang="ts" setup>

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
