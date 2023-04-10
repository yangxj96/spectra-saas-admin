import {createApp} from 'vue';
import App from './App.vue';
// 路由
import router from './plugin/router';
// 状态
import {createStore} from "@/plugin/store";
import useAppStore from "@/plugin/store/modules/app";

// 事件
import 'default-passive-events';
// element
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// 自定义指令
import AuthDirective from "@/directive/Auth";
import FocusDirective from "@/directive/Focus";
// 全局字体图标
import iconFont from "@/components/IconFont/index.vue";

const app = createApp(App);

// element 新 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 以下用到Vue的地方是为能让Webstorm能自动识别我们的vue组件之类的
// const Vue = app;
// 注册组件
// Vue.component("IconFont", iconFont);
// 注册指令
// Vue.directive("auth", AuthDirective);
// Vue.directive('focus', FocusDirective);

app
    .use(createStore())
    .use(router)
    .use(ElementPlus, {locale: useAppStore().lang})
    .component("IconFont", iconFont)
    .directive("auth", AuthDirective)
    .directive('focus', FocusDirective)
    .mount('#app');


