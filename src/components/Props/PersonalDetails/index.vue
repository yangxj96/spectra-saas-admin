<template>
    <el-dialog v-model="isShow" destroy-on-close title="个人信息" width="30%">

        <el-avatar style="margin-left: 100px;margin-bottom: 10px" src="/img/default-avatar.png"/>
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

import {defineComponent} from "vue";
import useStore from "@/plugin/store";

export default defineComponent({
    name: 'prop-personal-details',
    created() {
        useStore().props.$subscribe((mutation, state) => {
            /*
            * mutation主要包含三个属性值：
            *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
            *   storeId：是当前store的id
            *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
            *         “direct” ：通过 action 变化的
                      ”patch object“ ：通过 $patch 传递对象的方式改变的
                      “patch function” ：通过 $patch 传递函数的方式改变的
            *
            * */
            // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
            this.isShow = state.personal_details;
        })
    },
    data() {
        return {
            isShow: useStore().props.getPersonalDetails
        }
    },
    methods: {
        // 关闭弹窗
        handlePropsCancel() {
            useStore().props.setPersonalDetails(false);
        }
    }
})

</script>

<style scoped>

</style>
