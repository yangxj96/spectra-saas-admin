// vuex.d.ts
import {ComponentCustomProperties} from 'vue'
import {Store} from 'vuex';
import {AllStateTypes} from "@/plugin/store/interface";
import {IMessage} from "element-plus/lib/el-message/src/types";

declare module '@vue/runtime-core' {

    // $store  : 为 `this.$store` 提供类型声明
    // $message: 为Element的消息提示框提供类型声明
    interface ComponentCustomProperties {
        $store: Store<AllStateTypes>,
        $message: IMessage
    }
}
