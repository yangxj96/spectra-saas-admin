/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {createApp} from 'vue';
import App from './App.vue';
// 路由
import router from './router';
// 状态
import store, {key} from './store/index';
// element
import ElementPlus from 'element-plus';
import '@/plugin/element/index.scss';
// 国际化
import i18n from "@/plugin/i18n";

const app = createApp(App);

app
	.use(store, key)
	.use(router)
	.use(ElementPlus)
	.use(i18n)
	.mount('#app');
