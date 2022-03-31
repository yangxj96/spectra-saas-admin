/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import RootStateTypes, {AllStateTypes} from "@/plugin/store/interface";
// vuex存储到本地session
import persistedState from 'vuex-persistedstate';
// 模块
import SystemModule from "@/plugin/store/modules/system";
import UserModule from "@/plugin/store/modules/user";

const store = createStore<RootStateTypes>({
    devtools: true,
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        SystemModule,
        UserModule
    },
    plugins: [
        persistedState({storage: window.sessionStorage})
    ]
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>(key);
}

export default store;

