import App from './App.vue';
// 路由
import router from './plugin/router';
// 状态
import {createStore} from "@/plugin/store";

// 滚动事件警告去除
import 'default-passive-events';
// element自定义的样式文件
import './plugin/element/index.scss'
// element全局指令
import {ElLoadingService, ElMessage, ElMessageBox, ElNotification} from 'element-plus';
// 自定义指令
import AuthDirective from "@/directive/Auth";
import FocusDirective from "@/directive/Focus";
import './assets/iconfont/iconfont'

// 创建APP
const app = createApp(App);

// 全局指令,因为使用了按需引入的插件,不会自动挂载这些全局指令
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$notify = ElNotification
app.config.globalProperties.$messageBox = ElMessageBox
app.config.globalProperties.$alert = ElMessageBox.alert
app.config.globalProperties.$confirm = ElMessageBox.confirm
app.config.globalProperties.$prompt = ElMessageBox.prompt
app.config.globalProperties.$loading = ElLoadingService

app
    .use(createStore())
    .use(router)
    // .component("IconFont", iconFont)
    .directive("auth", AuthDirective)
    .directive('focus', FocusDirective)
    .mount('#app');


