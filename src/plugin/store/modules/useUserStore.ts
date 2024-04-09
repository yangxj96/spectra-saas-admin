import { defineStore } from "pinia";
import type { Token } from "@/types";

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
