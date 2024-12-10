import type { App } from "vue";

import Icons from "@/components/common/Icons.vue";

export default function loadComponents(app: App) {
    app.component("icons", Icons);
}
