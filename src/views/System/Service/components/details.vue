<template>
    <div style="height: 100%">
       <el-dialog v-model="is_show" title="我是标题" width="30%" destroy-on-close>
    <span>
        It should be noted that the content will not be aligned in center default
    </span>
           <template #footer>
               <slot name="footer">
                   <el-button @click="handleDestroyDialog">关闭</el-button>
                   <el-button @click="handleSubmit" type="primary">确定</el-button>
               </slot>
           </template>
       </el-dialog>
   </div>
</template>

<script setup lang="ts">

const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    visible: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['submit'])

let is_show = ref(false);

function handleSubmit(param: any) {
    param.k = 1;
    handleDestroyDialog(param);
}

function getServiceDetails() {

}

// 销毁当前组件
function handleDestroyDialog(param: any) {
    emits('submit', param);
}

///////////// 属性监听
// watch(() => props.id, (value, oldValue, onCleanup) => {
//     getServiceDetails();
// })
//
// watch(() => props.visible, (value, oldValue, onCleanup) => {
//     is_show.value = value;
// })


</script>

<style scoped>

</style>
