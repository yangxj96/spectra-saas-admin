<template>
    <div style="height: 100%">
        <el-tabs v-model="active">
            <el-tab-pane name="routine">
                <template #label>
                    <el-icon>
                        <IconSetting color="#4d4d4d"/>
                    </el-icon>
                    <span>&nbsp;常规配置</span>
                </template>
                <Routine/>
            </el-tab-pane>
            <el-tab-pane name="file">
                <template #label>
                    <el-icon>
                        <IconFileConfig color="#4d4d4d"/>
                    </el-icon>
                    <span>&nbsp;文件存储配置</span>
                </template>
                <FileSave/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import Routine from "@/views/System/Config/components/Routine/index.vue";
import FileSave from "@/views/System/Config/components/FileSave/index.vue";

export default defineComponent({
    name: 'SystemConfig',
    components: {
        Routine,
        FileSave
    },
    data() {
        return {
            active: 'routine'
        }
    }
})

</script>

<style scoped lang="scss">
:deep(.el-tabs), :deep(.el-tabs__content), :deep(.el-tab-pane) {
    height: 100%;
}
</style>
