<template>
  <iframe ref="content" :allow="allow" :src="src" :title="title" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DemoEmbedIndex",
  data() {
    return {
      src: "https://www.yangxj96.com",
      allow: "fullscreen 'none'; payment 'none'",
      title: "module name"
    };
  },
  created() {
    window.postMessage(
      {
        code: 0,
        meg: "消息内容"
      },
      this.src
    );
    // 子页面处理
    // window.addEventListener('message', function(event) {
    // 判断消息是否来自可信任的源
    //   if (event.origin === 'http://127.0.0.1:5500/child.html') {
    //     console.log('message: ' + event.data)
    //   }
    // })
  }
});
</script>

<style scoped lang="scss">
iframe {
  height: 98%;
  width: 100%;
}
</style>
