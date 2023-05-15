import type { ObjectDirective } from "vue";

const Focus: ObjectDirective = {
  mounted(el: HTMLElement, binging) {
    if (el.tagName.toLocaleLowerCase() == "input") {
      el.focus();
    } else {
      if (el.getElementsByTagName("input")) {
        el.getElementsByTagName("input")[0].focus();
      }
    }
  }
};

export default Focus;
