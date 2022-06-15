<template>
    <el-dialog v-model="isShow" destroy-on-close title="修改密码" width="30%">
        <el-form v-model="form" :rules="rules" label-width="100px" style="max-width: 460px">
            <el-form-item label="旧密码" prop="old_password">
                <el-input v-model="form.old_password" placeholder="请输入原来的密码"/>
            </el-form-item>
            <el-form-item label="新密码" prop="new_password">
                <el-input v-model="form.new_password" placeholder="请输入新的密码"/>
            </el-form-item>
            <el-form-item label="重复密码" prop="verify_password">
                <el-input v-model="form.verify_password" placeholder="请重复输入新密码"/>
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
import useStore, {equalsKey} from '@/plugin/store/index'

@Options({})
export default class ChangePassword extends Vue {

    public propsStore = useStore().props;

    public isShow = this.propsStore.getChangePassword;

    public form: any = {
        old_password: '',
        new_password: '',
        verify_password: ''
    }

    public rules: any = {
        old_password: [
            {required: true, message: '请输入旧密码', trigger: 'blur'}
        ],
        new_password: [
            {required: true, message: '请输入新密码', trigger: 'blur'}
        ],
        verify_password: [
            {required: true, message: '请重复输入新密码', trigger: 'blur'}
        ]
    }

    public created() {
        this.propsStore.$subscribe((mutation, state) => {
            if (equalsKey('change_password', mutation)) {
                this.isShow = state.change_password;
            }
        });
    }

    // 关闭弹窗
    public handlePropsCancel() {
        this.propsStore.setChangePassword(false);
    }

}

</script>

<style scoped>

</style>
