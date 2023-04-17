import {createApp} from 'vue';
import App from './App.vue';
// 路由
import router from './plugin/router';
// 状态
import {createStore} from "@/plugin/store";

// 滚动事件警告去除
import 'default-passive-events';
// element
import ElementPlus from 'element-plus';
//import 'element-plus/dist/index.css';
import './plugin/element/index.scss'
// 自定义指令
import AuthDirective from "@/directive/Auth";
import FocusDirective from "@/directive/Focus";

// 创建APP
createApp(App)
    .use(createStore())
    .use(router)
    .use(ElementPlus)
    // .component("IconFont", iconFont)
    .directive("auth", AuthDirective)
    .directive('focus', FocusDirective)
    .mount('#app');


