import {defineStore} from "pinia";

const useSystemStore = defineStore('system', {
    state() {
        return {
            // 左侧菜单是否展开
            sidebar_unfold: true,
        }
    },
    getters: {
        getSidebarUnfold: state => state.sidebar_unfold
    },
    actions: {
        setSidebarUnfold() {
            this.sidebar_unfold = !this.sidebar_unfold;
        }
    },
    persist: true
})

export default useSystemStore;
