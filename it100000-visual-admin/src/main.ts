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
import 'element-plus/dist/index.css'
// import '@/plugin/element/index.scss';
// 国际化
import i18n from "@/plugin/i18n";
// 全局混入
import GlobalMixinDemo from "@/mixins/GlobalMixinDemo";
// 自定义指令
import AuthDirective from "@/directive/Auth";

const app = createApp(App);

app
	.use(AuthDirective)
	.use(store, key)
	.use(router)
	.use(ElementPlus)
	.use(i18n)
	.mixin(GlobalMixinDemo)
	.mount('#app');
