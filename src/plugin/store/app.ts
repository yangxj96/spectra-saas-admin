import {defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state() {
        return{
            lang:'zh-cn'
        }
    }
})
