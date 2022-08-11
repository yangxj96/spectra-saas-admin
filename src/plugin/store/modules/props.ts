import {defineStore} from "pinia";

const usePropsStore = defineStore('props', {
    state() {
        return {
            personal_details: false,
            change_password: false
        }
    },
    getters: {
        getPersonalDetails: state => state.personal_details,
        getChangePassword: state => state.change_password,
    },
    actions: {
        setPersonalDetails(val: boolean) {
            this.personal_details = val;
        },
        togglePersonal() {
            this.personal_details = !this.personal_details;
        },
        setChangePassword(val: boolean) {
            this.change_password = val;
        },
        toggleChangePassword() {
            this.change_password = !this.change_password;
        }
    },
    persist: true
})

export default usePropsStore;
