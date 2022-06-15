import {createApp} from 'vue';
import App from './App.vue';
// 路由
import router from './plugin/router';
// 状态
import {createPinia} from "pinia";
// 事件
import 'default-passive-events';
// element
import ElementPlus, {ElMessage} from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局混入
import GlobalMixinDemo from "@/mixins/GlobalMixinDemo";
// 自定义指令
import AuthDirective from "@/directive/Auth";
// 全局字体
import iconFont from "@/components/IconFont/index.vue";

const app = createApp(App);

// element 新 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties.$message = ElMessage;

app.use(AuthDirective)
    .use(createPinia())
    .use(router)
    .use(ElementPlus, {local: zhCn})
    // 挂在入组件
    .component('IconFont', iconFont)
    .mixin(GlobalMixinDemo)
    .mount('#app');
