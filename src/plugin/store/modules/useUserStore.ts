import { defineStore } from "pinia";
import { type Token } from "@/model/User";

export interface UserState {
  token: Token;
}

const useUserStore = defineStore("user", {
  state: () => {
    return <UserState>{
      token: {}
    };
  },
  persist: true
});

export default useUserStore;
