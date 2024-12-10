<script setup lang="ts">
    import RouteApi from "@/api/RouteApi";
    import { ElMessage } from "element-plus";
    import { ref, watch } from "vue";

    const model = defineModel();

    const properties = defineProps({
        route: {
            type: Object,
            required: true,
            default: {} as Route
        }
    });

    const emit = defineEmits(["close"]);

    const datum = ref<Route>();

    const textareaAutoSize = {
        minRows: 2,
        maxRows: 4
    };

    watch(
        () => properties.route,
        (n: any) => {
            // datum.value = JSON.parse(JSON.stringify(n)) as Route;
            datum.value = structuredClone(n);
        }
    );

    function save() {
        if (datum.value) {
            RouteApi.modify(datum.value).then(res => {
                if (res && res.code == 0) {
                    ElMessage.success({
                        message: "修改成功",
                        duration: 1000,
                        onClose() {
                            emit("close");
                        }
                    });
                }
            });
        }
    }

    function closeDialog(done: any) {
        emit("close");
        done();
    }
</script>

<template>
    <el-dialog
        :model-value="model"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :before-close="closeDialog"
        destroy-on-close
        title="路由详情"
        width="500">
        <!-- 内容 -->
        <el-form :model="datum" label-width="auto" style="max-width: 600px" class="loading-box">
            <el-form-item label="主键ID">
                {{ datum!!.id }}
            </el-form-item>
            <el-form-item label="URI">
                <el-input v-model="datum!!.uri" />
            </el-form-item>
            <el-form-item label="排序">
                <el-input-number v-model="datum!!.order" style="width: 100%" />
            </el-form-item>
            <el-form-item label="过滤器">
                <el-input v-model="datum!!.filters" type="textarea" :autosize="textareaAutoSize" />
            </el-form-item>
            <el-form-item label="断言器">
                <el-input v-model="datum!!.predicates" type="textarea" :autosize="textareaAutoSize" />
            </el-form-item>
            <el-form-item label="元数据">
                <el-input v-model="datum!!.metadata" type="textarea" :autosize="textareaAutoSize" />
            </el-form-item>
        </el-form>
        <!-- 底部 -->
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="save">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>
