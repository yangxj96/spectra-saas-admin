/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

/* eslint-disable */
declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any>
	export default component
}
