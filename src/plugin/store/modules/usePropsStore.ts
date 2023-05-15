import { defineStore } from "pinia";

const usePropsStore = defineStore("props", {
  state: () => ({
    personal_details: false,
    change_password: false
  }),
  persist: true
});

export default usePropsStore;
