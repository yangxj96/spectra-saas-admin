import { type RouteRecordRaw } from "vue-router";
import layout from "@/components/Layout/index.vue";

/**
 * 流程控制模块
 */
export default [
  {
    name: "流程控制",
    path: "/Flow",
    component: layout,
    redirect: "",
    children: [
      {
        path: "",
        name: "流程控制",
        component: () => import("@/views/Flow/List/index.vue"),
        meta: {
          title: "流程控制"
        }
      },
      {
        path: "Created",
        name: "创建流程",
        component: () => import("@/views/Flow/Created/index.vue"),
        meta: {
          title: "创建流程"
        }
      }
    ]
  }
] as Array<RouteRecordRaw>;
