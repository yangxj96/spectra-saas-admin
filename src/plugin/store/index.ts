import useAppStore from "@/plugin/store/modules/app";
import usePropsStore from "@/plugin/store/modules/props";
import useSystemStore from "@/plugin/store/modules/system";
import useUserStore from "@/plugin/store/modules/user";
import {SubscriptionCallbackMutation, createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";

/**
 * 检查key是否是对应的
 * @since 1.0
 * @param key 需要进行对比的key
 * @param mutation mutation
 * @deprecated  新版本中打包后mutation.events变成了undefined,暂时弃用
 */
export function equalsKey(key: string, mutation: SubscriptionCallbackMutation<any>): boolean {
    return (Array.isArray(mutation.events) ? mutation.events[0] : mutation.events).key === key;
}

export function createStore() {
    let pinia = createPinia();
    pinia.use(createPersistedState({
        storage: sessionStorage,
        beforeRestore: ctx => {
            console.debug(`恢复之前执行: ${ctx.store.$id}`, ctx);
        },
        afterRestore: ctx => {
            console.debug(`恢复之后执行: ${ctx.store.$id}`, ctx);
        }
    }));

    return pinia;
}

export default function useStore() {
    return {
        app: useAppStore(),
        props: usePropsStore(),
        system: useSystemStore(),
        user: useUserStore()
    }
}
