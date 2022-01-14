<template>
    <el-dialog v-model="this.is_show" title="我是标题" width="30%">
    <span>
        It should be noted that the content will not be aligned in center bydefault
    </span>
        <template #footer>
            <slot name="footer">
                <el-button @click="this.handleDestroyDialog">关闭</el-button>
                <el-button @click="$emit('submit',{k:1})" type="primary">确定</el-button>
            </slot>
        </template>
    </el-dialog>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
    name: 'service-details',
    emits: ['submit'],
    props: {
        id: {
            require: true,
            type: String,
            default: ''
        },
        visible: {
            require: true,
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            is_show: false
        }
    },
    methods: {
        getServiceDetails() {

        },
        /**
         * 销毁当前组件
         */
        handleDestroyDialog() {
            this.is_show = false;
            console.log(this);
        }
    },
    watch: {
        id(val) {
            console.log('新值:', val);
            this.getServiceDetails();
        },
        visible(val) {
            this.is_show = val;
        }
    }
})
</script>

<style scoped>

</style>
