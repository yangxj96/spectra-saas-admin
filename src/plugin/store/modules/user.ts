import {defineStore} from "pinia";

export interface UserState {
    token: Token
}

export interface Token {
    username: string;
    access_token: string;
    refresh_token: string;
    authorities: string[],
    expiration_time: string
}

const useUserStore = defineStore('user', {
    state() {
        return <UserState>{
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
