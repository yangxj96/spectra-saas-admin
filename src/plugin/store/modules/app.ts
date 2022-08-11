import {defineStore} from "pinia";

const useAppStore = defineStore('app', {
    state() {
        return{
            lang:'zh-cn'
        }
    },
    persist: true
})

export default useAppStore;
