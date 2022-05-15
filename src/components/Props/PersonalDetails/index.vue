<template>
    <el-dialog v-model="$store.state.props.personal_details" destroy-on-close title="个人信息" width="30%">

        <el-avatar style="margin-left: 100px;margin-bottom: 10px"
                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        <el-form label-width="100px" style="max-width: 460px">
            <el-form-item label="用户名">
                <el-input value="我是用户名" :disabled="true" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input placeholder="请输入邮箱"/>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input placeholder="请输入手机号码"/>
            </el-form-item>
            <el-form-item label="个人说明">
                <el-input placeholder="请输入个人说明" type="textarea" rows="5"/>
            </el-form-item>
        </el-form>

        <template #footer>
            <slot name="footer">
                <el-button @click="handlePropsCancel">关闭</el-button>
                <el-button type="primary">确定</el-button>
            </slot>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import {Vue, Options} from "vue-property-decorator";

@Options({})
export default class PersonalDetails extends Vue {

    public created() {

    }

    // 关闭弹窗
    public handlePropsCancel(){
        this.$store.dispatch('props/togglePersonal');
    }

}

</script>

<style scoped>

</style>
