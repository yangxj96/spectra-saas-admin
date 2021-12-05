/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import RootStateTypes, {AllStateTypes} from "@/store/interface";
import SystemModule from "@/store/modules/system";

export default createStore<RootStateTypes>({
	modules: {
		SystemModule
	}
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
	return baseUseStore<T>(key);
}
