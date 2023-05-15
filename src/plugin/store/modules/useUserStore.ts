import {defineStore} from "pinia";
import {type Token} from "@/model/User";

export interface UserState {
  token: Token;
}

const useUserStore = defineStore("user", {
  state: () => {
    return <UserState>{
      token: {}
    };
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
});

export default useUserStore;
