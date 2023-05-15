import { defineStore } from "pinia";

const useSystemStore = defineStore("system", {
  state: () => ({
    // 左侧菜单是否展开
    sidebar_unfold: true,
    // 是否禁用菜单项
    item_disabled: false
  }),
  getters: {
    getSidebarUnfold: state => state.sidebar_unfold,
    getItemDisabled: state => state.item_disabled
  },
  actions: {
    setSidebarUnfold() {
      this.sidebar_unfold = !this.sidebar_unfold;
    },
    setItemDisabled(val: boolean) {
      this.item_disabled = val;
    }
  },
  persist: true
});

export default useSystemStore;
