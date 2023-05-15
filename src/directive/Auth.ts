import type { ObjectDirective } from "vue";

const authority = ["USER:INSERT", "USER:DELETE", "USER:UPDATE", "USER:SELECT"];

const Auth: ObjectDirective = {
  // 指令是具有一组生命周期的钩子：
  // 在绑定元素的 attribute 或事件监听器被应用之前调用
  created(el: HTMLElement, binging) {
    console.debug("[自定义指令] - created binging:", binging);
    if (authority.indexOf(binging.value) == -1) {
      el.hidden = true;
    }
  },
  // 在绑定元素的父组件挂载之前调用
  beforeMount(el: HTMLElement, binging) {
    console.debug("[自定义指令] - beforeMount binging:", binging);
  },
  // 绑定元素的父组件被挂载时调用
  mounted(el: HTMLElement, binging) {
    console.debug("[自定义指令] - mounted binging:", binging);
    el.addEventListener("click", () => {
      console.debug("[自定义指令] - auth directive click", binging.value);
    });
  },
  // 在包含组件的 VNode 更新之前调用
  beforeUpdate(el: HTMLElement, binging, vn) {
    console.debug("[自定义指令] - beforeUpdate binging:", binging);
    console.debug("[自定义指令] - beforeUpdate vn:", vn);
  },
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  updated(el: HTMLElement, binging, vn) {
    console.debug("[自定义指令] - updated binging:", binging);
    console.debug("[自定义指令] - updated vn:", vn);
  },
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount(el: HTMLElement, binging) {
    console.debug("[自定义指令] - beforeUnmount binging:", binging);
  },
  // 卸载绑定元素的父组件时调用
  unmounted(el: HTMLElement, binging) {
    console.debug("[自定义指令] - unmounted binging:", binging);
  }
};

export default Auth;
