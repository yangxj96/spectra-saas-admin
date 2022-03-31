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

import {Vue, Options, Watch, Prop} from "vue-property-decorator";

@Options({
    emits: ['submit']
})
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

    @Watch('id', {immediate: true})
    public watchId(nv: string) {
        this.getServiceDetails();
    }

    @Watch('visible')
    public watchVisible(nv: boolean) {
        console.log('visible', nv);
        this.is_show = nv;
    }

}

</script>

<style scoped>

</style>
