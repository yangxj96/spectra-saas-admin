import {defineStore} from "pinia";
import {Token} from "@/api/UserApi";


export interface UserState {
    token: Token
}

const useUserStore = defineStore('user', {
    state: () => {
        return <UserState> {
            token: {}
        }
    },
    getters: {
        getToken: state => state.token
    },
    actions: {
        setToken(token: Token) {
            this.token = token;
        }
    },
    persist: true
})

export default useUserStore;
