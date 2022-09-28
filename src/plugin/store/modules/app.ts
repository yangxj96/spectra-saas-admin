import {defineStore} from "pinia";

const useAppStore = defineStore('app', {
    state: () => ({
        lang:'zh-cn'
    }),
    persist: true
})

export default useAppStore;
