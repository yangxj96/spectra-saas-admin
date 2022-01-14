import {Module} from "vuex";
import UserModuleTypes from "@/store/modules/user/interface";
import RootStateTypes from "@/store/interface";

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
