/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {InjectionKey} from "vue";
import {createStore, Store} from "vuex";
import RootStateTypes from "@/plugin/store/interface";
// vuex存储到本地session
import persistedState from 'vuex-persistedstate';
// 模块
const files = import.meta.globEager('./modules/*.ts');
// 注册所有模块
let ms = Object.keys(files).reduce(
    (modules: { [key: string]: any }, path: string) => {
        const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
        modules[moduleName] = files[path]?.default
        return modules
    },
    {}
);

const store = createStore<RootStateTypes>({
    devtools: import.meta.env.MODE == 'development',
    modules: ms,
    plugins: [
        persistedState({storage: window.sessionStorage})
    ]
})


export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export default store;

