<template>
  <el-container class="box">
    <el-header class="box-header">
      <navbar />
    </el-header>

    <el-container class="box-container">
      <IM />

      <el-aside width="200px">
        <sidebar />
      </el-aside>

      <el-main class="box-main">
        <div style="height: 100%">
          <el-row>
            <i class="box-unfold-a" @click="chooseSidebarUnfold">
              <icons name="icon-caret-left" v-if="systemStore.sidebar_unfold" />
              <icons name="icon-caret-right" v-else />
            </i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item v-for="(item, idx) in breadcrumb" :key="idx" :to="{ path: item.path }">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-row>
          <div class="box-content loading-box">
            <!--<router-view/>-->

            <router-view v-slot="{ Component }">
              <transition mode="out-in" name="el-zoom-in-top">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
          <el-row>
            <el-footer class="footer">
              Copyright © 2018-2023
              <strong><a href="//yangxj96.github.io/" target="_blank">yangxj96</a></strong>
              &nbsp;
              <strong><a href="//yangxj96.github.io/" target="_blank">yangxj96.github.io</a></strong>
              All Rights Reserved. 备案号：
              <a target="_blank" rel="nofollow" href="https://beian.miit.gov.cn/">滇ICP备xxxxxxxx号</a>
            </el-footer>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Navbar from "@/views/Layout/components/navbar/index.vue";
import Sidebar from "@/views/Layout/components/sidebar/index.vue";
import { type RouteLocationMatched } from "vue-router";
import { defineComponent } from "vue";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import Icons from "@/components/common/Icons.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Icons,
    Navbar,
    Sidebar
  },
  data() {
    return {
      systemStore: useSystemStore(),
      breadcrumb: [] as RouteLocationMatched[],
      showIm: false
    };
  },
  created() {
    this.handlerRouter();
  },
  methods: {
    handlerRouter(router: RouteLocationMatched[] = []) {
      if (router.length <= 0) {
        router = [...this.$router.currentRoute.value.matched];
      }
      if (router.length >= 2 && router[router.length - 1].name == router[router.length - 2].name) {
        router = router.splice(0, router.length - 1);
      }
      this.breadcrumb = router;
    },
    chooseSidebarUnfold() {
      this.systemStore.sidebar_unfold = !this.systemStore.sidebar_unfold;
    }
  },
  watch: {
    "$router.currentRoute.value.matched"(val) {
      this.handlerRouter([...val]);
    }
  }
});
</script>

<style scoped lang="scss">
::v-deep(.el-aside) {
  width: auto;
}

::v-deep(.el-breadcrumb) {
  line-height: 1.5;
}

.box {
  height: 100vh;
}

.box-aside {
  min-width: 64px;
}

.box-header {
  height: auto;
  border-bottom: solid 1px var(--el-border-color);
  padding: 0;
}

.box-container {
  height: calc(100% - 61px);
}

.box-main {
  .box-content {
    width: 100%;
    height: calc(100% - 25px - 25px);
    padding-top: 1%;
  }

  .box-unfold-a {
    margin-right: 5px;
  }

  .box-unfold-a:hover {
    cursor: pointer;
  }

  .footer {
    text-align: center;
    width: 100%;
    height: 20px;
    font-size: 10px;
    line-height: 1;
    color: var(--el-text-color-regular);

    a {
      color: var(--el-text-color-primary);
    }
  }
}
</style>
