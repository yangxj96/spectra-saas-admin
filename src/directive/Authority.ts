import type { ObjectDirective } from "vue";

/** 是否需要删除的标识,因为钩子顺序问题,可以这样使用 **/
let del: boolean = false;

export default {
  created(el: HTMLElement, binging) {
    const authority = useUserStore().token.authorities;
    if (authority.indexOf(binging.value) == -1) {
      el.hidden = true;
      del = true;
    }
  },
  mounted(el) {
    // 需要移除掉,不然可能出问题
    if (del) {
      el.id = CommonUtils.UUID();
      document.getElementById(el.id)?.remove();
    }
  }
} as ObjectDirective;
