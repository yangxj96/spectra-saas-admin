import {App, VNode} from 'vue';

// 简单示例
// export default (app: App<Element>) => {
//     // 这将被作为 `mounted` 和 `updated` 调用
//     app.directive('auth', (el: HTMLElement, binding) => {
//         el.addEventListener('click', () => {
//             console.log('auth directive click');
//         })
//     })
// }

const authority = ['USER:INSERT', 'USER:DELETE', 'USER:UPDATE', 'USER:SELECT'];

export default (app: App<Element>) => {
    app.directive('auth', {
        // 指令是具有一组生命周期的钩子：
        // 在绑定元素的 attribute 或事件监听器被应用之前调用
        created(el: HTMLElement, binging) {
            console.log('created binging:', binging);
            if (authority.indexOf(binging.value) == -1) {
                el.hidden = true;
            }
        },
        // 在绑定元素的父组件挂载之前调用
        beforeMount(el: HTMLElement, binging) {
            console.log('beforeMount binging:', binging);
        },
        // 绑定元素的父组件被挂载时调用
        mounted(el: HTMLElement, binging) {
            console.log('mounted binging:', binging);
            el.addEventListener('click', () => {
                console.log('auth directive click', binging.value);
            })
        },
        // 在包含组件的 VNode 更新之前调用
        beforeUpdate(el: HTMLElement, binging, vn) {
            console.log('beforeUpdate binging:', binging);
            console.log('beforeUpdate vn:', vn);
        },
        // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
        updated(el: HTMLElement, binging, vn) {
            console.log('updated binging:', binging);
            console.log('updated vn:', vn);
        },
        // 在绑定元素的父组件卸载之前调用
        beforeUnmount(el: HTMLElement, binging) {
            console.log('beforeUnmount binging:', binging);
        },
        // 卸载绑定元素的父组件时调用
        unmounted(el: HTMLElement, binging) {
            console.log('unmounted binging:', binging);
        }
    })
}
