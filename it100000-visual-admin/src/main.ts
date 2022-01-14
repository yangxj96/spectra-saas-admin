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
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import '@/plugin/element/index.scss';
// 全局混入
import GlobalMixinDemo from "@/mixins/GlobalMixinDemo";
// 自定义指令
import AuthDirective from "@/directive/Auth";
// 全局字体
import iconFont from "@/components/IconFont/index.vue";

const app = createApp(App);

app.component('IconFont', iconFont);

app
    .use(AuthDirective)
    .use(store, key)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .mixin(GlobalMixinDemo)
    .mount('#app');
