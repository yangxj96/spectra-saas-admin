import useAppStore from "@/plugin/store/modules/useAppStore";
import usePropsStore from "@/plugin/store/modules/usePropsStore";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import useUserStore from "@/plugin/store/modules/useUserStore";
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";

export function createStore() {
    let pinia = createPinia();
    pinia.use(createPersistedState({
        storage: sessionStorage,
        // beforeRestore: ctx => {
        //     console.debug(`恢复之前执行: ${ctx.store.$id}`, ctx);
        // },
        // afterRestore: ctx => {
        //     console.debug(`恢复之后执行: ${ctx.store.$id}`, ctx);
        // }
    }));

    return pinia;
}

export default function useStore() {
    return {
        app: useAppStore(),
        props: usePropsStore(),
        system: useSystemStore(),
        user: useUserStore()
    };
}

