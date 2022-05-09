import {createApp} from 'vue';
import App from './App.vue';
// 路由
import router from './plugin/router';
// 状态
import store, {key} from './plugin/store/index';
// 事件
import 'default-passive-events';
// element
import ElementPlus, {ElMessage} from 'element-plus';
import 'element-plus/dist/index.css'
// 全局混入
import GlobalMixinDemo from "@/mixins/GlobalMixinDemo";
// 自定义指令
import AuthDirective from "@/directive/Auth";
// 全局字体
import iconFont from "@/components/IconFont/index.vue";

const app = createApp(App);

app.config.globalProperties.$message = ElMessage;

app.use(AuthDirective)
    .use(store, key)
    .use(router)
    .use(ElementPlus)
    // 挂在入组件
    .component('IconFont', iconFont)
    .mixin(GlobalMixinDemo)
    .mount('#app');
