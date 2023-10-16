<template>
  <el-menu
    class="box-menu"
    :router="true"
    :default-active="'Home'"
    :collapse="!unfold"
    :collapse-transition="true"
    :unique-opened="true"
    @select="onMenuItemClick">
    <el-menu-item index="Home" :route="{ path: '/' }" :disabled="itemDisabled">
      <icons name="icon-home" class-name="icon-sidebar" />
      <template #title>首页</template>
    </el-menu-item>
    <!-- 循环添加菜单 -->
    <el-sub-menu v-for="(item, idx) in menus" :key="idx" :index="item.index" :disabled="itemDisabled">
      <template #title>
        <icons :name="item.icon" class-name="icon-sidebar" />
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="(ch, i) in item.children"
        v-show="ch.show"
        :key="i"
        :index="ch.index"
        :route="{ path: ch.path }">
        <icons :name="ch.icon" class-name="icon-sidebar" />
        {{ ch.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { clean } from "@/plugin/request";
import { defineComponent } from "vue";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import Icons from "@/components/common/Icons.vue";
import { MenuTree } from "@/types";

export default defineComponent({
  name: "LayoutSidebar",
  components: { Icons },
  data() {
    return {
      unfold: true,
      itemDisabled: false,
      menus: [] as MenuTree[]
    };
  },
  mounted() {
    // 赋值
    this.unfold = useSystemStore().sidebar_unfold;
    // 是否禁用
    this.itemDisabled = useSystemStore().item_disabled;
    // 菜单
    this.menus = useSystemStore().menus;
    // 订阅
    useSystemStore().$subscribe((mutation, state) => {
      this.unfold = state.sidebar_unfold;
      this.itemDisabled = state.item_disabled;
      this.menus = state.menus;
    });
  },
  methods: {
    onMenuItemClick() {
      // 参数 index: string, path: string[], item: MenuItemClicked, router: any
      // console.log(`index:${index},path:${path}`);
      // console.log(`item:`, item);
      // console.log(`router:`, router);
      if (clean.length > 0) {
        for (let canceler of clean) {
          canceler("取消请求");
        }
      }
    }
  }
});
</script>

<style scoped lang="scss">
.box-menu {
  height: 100%;
}

.box-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.icon-sidebar {
  width: 1.4em;
  height: 1.4em;
  padding-right: 0.5em;
  padding-left: 0.2em;
}
</style>
