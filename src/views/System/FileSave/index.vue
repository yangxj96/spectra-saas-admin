<template>
    <div style="height: 100%">
        <el-col :span="8" :offset="8">

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
                    <el-button type="primary" >保存</el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import SystemApi, {FileSave} from "@/api/SystemApi";
import {AxiosResponse} from "axios";
import {IResult} from "@/plugin/request";

export default defineComponent({
    created() {
        this.init();
    },
    data(){
        return {
            form: {} as FileSave
        }
    },
    methods:{
        init(){
            SystemApi.getFileSave().then((response: AxiosResponse<IResult<FileSave>>) => {
                console.log(response.data)
                let result = response.data;
                this.form = result.data;
            })
        }
    }
})


</script>

<style scoped lang="scss">
    .tabs-box {
        height: 100%;
    }
</style>
