import { createApp } from "vue";
import App from "./App.vue";
// 加载相关内容
import loadPlugins from "@/plugin";
import loadDirective from "@/directive";
// iconfont
import "//at.alicdn.com/t/c/font_3119163_hp36jfkhicb.js";
import Icons from "@/components/common/Icons.vue";

import Mock from "@/mocks/browser.ts";

// 启动mock模拟请求
if (import.meta.env.DEV) {
    await Mock.start({
        // 未拦截的地址不进行警告
        onUnhandledRequest: "bypass"
    });
}

// 创建APP
const app = createApp(App);
loadPlugins(app);
loadDirective(app);
app.component("icons", Icons);
app.mount("#app");
