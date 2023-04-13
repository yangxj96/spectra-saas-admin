<template>
    <div style="height: 100%">

        <el-col :span="12" :offset="6">

            <el-form v-model="form" label-width="120px">
                <el-form-item label="存储方式">
                    <el-radio-group v-model="form.type">
                        <el-radio :label="0">本地存储</el-radio>
                        <el-radio :label="1">阿里云OSS</el-radio>
                        <el-radio :label="2">腾讯云COS</el-radio>
                        <el-radio :label="3">七牛云KODO</el-radio>
                        <el-radio :label="4">MinIO</el-radio>
                    </el-radio-group>
                </el-form-item>

                <div v-if="form.type === 0">
                    <el-form-item label="请输入本地位置">
                        <el-input v-model="form.locale"/>
                    </el-form-item>
                </div>

                <div v-if="form.type !== 0">
                    <el-form-item label="AccessID">
                        <el-input v-model="form.access_id"/>
                    </el-form-item>
                    <el-form-item label="AccessSecret">
                        <el-input v-model="form.access_secret"/>
                    </el-form-item>
                    <el-form-item label="存储桶名称">
                        <el-input v-model="form.bucket"/>
                    </el-form-item>
                </div>

                <el-form-item>
                    <el-button type="primary">保存</el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "ConfigFileSave",
    created() {
        this.init();
    },
    data() {
        return {
            form: {} as any
        }
    },
    methods: {
        init() {
            this.form = {
                type: 0,
                locale: '/opt/file/img',
                access_id: 'access_id',
                access_secret: 'access_secret',
                bucket: 'bucket'
            }
        }
    }
})
</script>

<style scoped>

</style>