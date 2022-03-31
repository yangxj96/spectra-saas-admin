<template>
    <el-dialog v-model="this.is_show" title="我是标题" width="30%">
    <span>
        It should be noted that the content will not be aligned in center bydefault
    </span>
        <template #footer>
            <slot name="footer">
                <el-button @click="handleDestroyDialog">关闭</el-button>
                <el-button @click="handleSubmit" type="primary">确定</el-button>
            </slot>
        </template>
    </el-dialog>
</template>

<script lang="ts">

import {Vue, Options, Watch, Prop, Emit} from "vue-property-decorator";

@Options({})
export default class SystemServiceDetails extends Vue {

    @Prop({default: ''})
    public id!: string;

    @Prop({default: false})
    public visible!: boolean;

    public is_show: boolean = false;

    /** 获取数据详情 **/
    public getServiceDetails() {

    }

    /** 销毁当前组件 **/
    public handleDestroyDialog() {
        this.is_show = false;
    }

    @Emit('submit')
    public handleSubmit(param:any){
        console.log('submit事件提交之前执行~');
        param.k = 1;
    }

    @Watch('id', {immediate: true})
    public watchId(nv: string) {
        this.getServiceDetails();
    }

    @Watch('visible')
    public watchVisible(nv: boolean) {
        this.is_show = nv;
    }

}

</script>

<style scoped>

</style>
