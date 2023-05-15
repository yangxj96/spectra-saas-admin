import { defineStore } from "pinia";

const useSystemStore = defineStore("system", {
  state: () => ({
    // 左侧菜单是否展开
    sidebar_unfold: true,
    // 是否禁用菜单项
    item_disabled: false
  }),
  persist: true
});

export default useSystemStore;
