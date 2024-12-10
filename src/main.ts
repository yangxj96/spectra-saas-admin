import { createApp } from "vue";
import App from "./App.vue";
// 加载相关内容
import loadPlugins from "@/plugin";
import loadDirective from "@/directive";
import loadComponents from "@/components";
import loadMock from "@/mocks";
// iconfont
import "//at.alicdn.com/t/c/font_3119163_hp36jfkhicb.js";

await loadMock();
// 创建APP
const app = createApp(App);
loadPlugins(app);
loadDirective(app);
loadComponents(app);
app.mount("#app");
