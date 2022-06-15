import {defineStore} from "pinia";

const useAppStore = defineStore('app', {
    state() {
        return{
            lang:'zh-cn'
        }
    }
})

export default useAppStore;
