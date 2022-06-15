import {defineStore} from "pinia";

const useUserStore = defineStore('user', {
    state() {
        return {
            token: ''
        }
    },
    getters: {
        getToken: state => state.token
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        }
    }
})

export default useUserStore;
