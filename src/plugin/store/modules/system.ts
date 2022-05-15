/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {Module} from "vuex";
import RootStateTypes from "@/plugin/store/interface";

export  interface SystemModuleTypes {
    // 左侧菜单是否展开
    sidebar_unfold: boolean;
}

const system: Module<SystemModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        sidebar_unfold: true,
    },
    // 同步提交操作
    mutations: {
        CHANGE_SIDEBAR_UNFOLD(state) {
            state.sidebar_unfold = !state.sidebar_unfold;
        }
    },
    // 异步提交操作
    actions: {
        changeSidebarUnfold({commit}) {
            commit('CHANGE_SIDEBAR_UNFOLD');
        }
    },
    getters: {
        getUnfold: (state: any) =>  state.sidebar_unfold,
    }
};

export default system;
