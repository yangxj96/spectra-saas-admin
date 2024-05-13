import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./plugin/router";
// 状态
import { createStore } from "@/plugin/store";
// element自定义的样式文件
import "./plugin/element/index.scss";
// element全局指令
import ElementPlus from "element-plus";
// 自定义指令
import Owner from "@/directive/Owner";
// iconfont
import "//at.alicdn.com/t/c/font_3119163_hp36jfkhicb.js";

// 创建APP
const app = createApp(App);

app.use(createStore()).use(router).use(ElementPlus).directive("owner", Owner).mount("#app");
