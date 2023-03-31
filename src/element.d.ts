import {ElLoadingService, ElMessage, ElMessageBox, ElNotification} from "element-plus";

declare module '@vue/runtime-core' {

    export interface ComponentCustomProperties {
        $message: typeof ElMessage
        $notify: typeof ElNotification
        $messageBox: typeof ElMessageBox
        $alert: typeof ElMessageBox.alert
        $confirm: typeof ElMessageBox.confirm
        $prompt: typeof ElMessageBox.prompt
        $loading: typeof ElLoadingService
    }
}
