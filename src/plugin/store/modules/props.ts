import {Module} from "vuex";
import RootStateTypes from "@/plugin/store/interface";

export interface PropsModuleTypes {
    personal_details: boolean,
    change_password: boolean
}

const props: Module<PropsModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        personal_details: false,
        change_password: false
    },
    // 同步提交操作
    mutations: {
        TOGGLE_PERSONAL(state) {
            state.personal_details = !state.personal_details
        },
        TOGGLE_CHANGE_PASSWORD(state){
            state.change_password = !state.change_password;
        }
    },
    // 异步提交操作
    actions: {
        togglePersonal({commit}) {
            commit('TOGGLE_PERSONAL');
        },
        toggleChangePassword({commit}){
            commit('TOGGLE_CHANGE_PASSWORD');
        }
    },
    getters: {
        personal: (state: any) => state.personal
    }
};

export default props;
