// declare module '@vue/runtime-core' {
//     interface ComponentCustomProperties {
//         $message: typeof import('element-plus')['ElMessage']
//         $notify: typeof import('element-plus')['ElNotification']
//         $msgbox: typeof import('element-plus')['ElMessageBox']
//         $messageBox: typeof import('element-plus')['ElMessageBox']
//         $alert: typeof import('element-plus')['ElMessageBox']['alert']
//         $confirm: typeof import('element-plus')['ElMessageBox']['confirm']
//         $prompt: typeof import('element-plus')['ElMessageBox']['prompt']
//         $loading: typeof import('element-plus')['ElLoadingService']
//     }
// }

declare module '@vue/runtime-core' {
    import type {ElMessage, ElNotification, ElMessageBox, ElLoadingService} from "element-plus";

    export interface ComponentCustomProperties  {
        $message: typeof ElMessage
        $notify: typeof ElNotification
        $msgbox: typeof ElMessageBox
        $messageBox: typeof ElMessageBox
        $alert: typeof ElMessageBox.alert
        $confirm: typeof ElMessageBox.confirm
        $prompt: typeof ElMessageBox.prompt
        $loading: typeof ElLoadingService
    }
}
