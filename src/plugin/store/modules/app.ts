import {Module} from "vuex";
import RootStateTypes from "@/plugin/store/interface";

export  interface AppModuleTypes {
    // 左侧菜单是否展开
    lang: string;
}

const app: Module<AppModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        lang: 'zh-cn',
    },
    // 同步提交操作
    mutations: {

    },
    // 异步提交操作
    actions: {

    },
    getters: {
        lang: (state: any) =>  state.lang
    }
};

export default app;
