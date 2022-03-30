import {Module} from "vuex";
import RootStateTypes from "@/plugin/store/interface";

export  interface UserModuleTypes {
    // token
    token: string;
}

const UserModule: Module<UserModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        token: ''
    },
    mutations: {
        TOKEN(state,data) {
            state.token = data;
        }
    },
    actions: {
        setToken({commit}, data) {
            commit('TOKEN', data);
        }
    },
    getters: {
        token: (state: any) => state.token
    }
}

export default UserModule;
