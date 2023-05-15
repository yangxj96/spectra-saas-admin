import {ElLoadingService, ElMessage, ElMessageBox, ElNotification} from "element-plus";

/**
 * 按需引入后这里无效了,等研究下怎么使用
 */
declare module "@vue/runtime-core" {

  export interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $messageBox: typeof ElMessageBox;
    $alert: typeof ElMessageBox.alert;
    $confirm: typeof ElMessageBox.confirm;
    $prompt: typeof ElMessageBox.prompt;
    $loading: typeof ElLoadingService;
  }
}
