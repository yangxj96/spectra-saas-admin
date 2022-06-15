import useAppStore from "@/plugin/store/modules/app";
import usePropsStore from "@/plugin/store/modules/props";
import useSystemStore from "@/plugin/store/modules/system";
import useUserStore from "@/plugin/store/modules/user";
import {SubscriptionCallbackMutation} from "pinia";

/**
 * 检查key是否是对应的
 * @param key 需要进行对比的key
 * @param mutation mutation
 */
export function equalsKey(key: string, mutation: SubscriptionCallbackMutation<any>): boolean {
    return (Array.isArray(mutation.events) ? mutation.events[0] : mutation.events).key === key;
}

export default function useStore() {
    return {
        app: useAppStore(),
        props: usePropsStore(),
        system: useSystemStore(),
        user: useUserStore()
    }
}
