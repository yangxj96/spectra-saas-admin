// vuex.d.ts
import {Store} from 'vuex';
import {AllStateTypes} from "@/plugin/store/interface";

declare module '@vue/runtime-core' {
    // $store  : 为 `this.$store` 提供类型声明
    // $message: 为Element的消息提示框提供类型声明
    interface ComponentCustomProperties {
        $store: Store<AllStateTypes>,
        $message: typeof import('element-plus')['ElMessage']
        $notify: typeof import('element-plus')['ElNotification']
        $msgbox: typeof import('element-plus')['ElMessageBox']
        $messageBox: typeof import('element-plus')['ElMessageBox']
        $alert: typeof import('element-plus')['ElMessageBox']['alert']
        $confirm: typeof import('element-plus')['ElMessageBox']['confirm']
        $prompt: typeof import('element-plus')['ElMessageBox']['prompt']
        $loading: typeof import('element-plus')['ElLoadingService']
    }
}
