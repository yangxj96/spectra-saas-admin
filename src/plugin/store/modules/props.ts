import {Module} from "vuex";
import RootStateTypes from "@/plugin/store/interface";

export interface PropsModuleTypes {
    personal: boolean
}

const props: Module<PropsModuleTypes, RootStateTypes> = {
    namespaced: true,
    state: {
        personal: false
    },
    // 同步提交操作
    mutations: {
        TOGGLE_PERSONAL(state) {
            state.personal = !state.personal
        }
    },
    // 异步提交操作
    actions: {
        togglePersonal({commit}) {
            commit('TOGGLE_PERSONAL');
        }
    },
    getters: {
        personal: (state: any) => state.personal
    }
};

export default props;
