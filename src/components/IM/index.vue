<template>
  <el-dialog
    v-model="show"
    :modal="false"
    :append-to-body="true"
    :show-close="false"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    draggable>
    <!-- 头部 -->
    <template v-slot:header>
      <el-row>
        <el-col :span="23">
          <icons name="icon-IM" />
          <span style="margin-left: 4px">即时通讯</span>
        </el-col>
        <el-col :span="1">
          <el-button link style="float: right" @click="handleMinimizeIm">
            <icons name="icon-im-lessen" />
          </el-button>
        </el-col>
      </el-row>
    </template>

    <template v-slot:default>
      <!-- 内容 -->
      <el-row>
        <el-col :span="4" style="max-height: 45vh">
          <el-menu style="height: 100%; margin-right: 10px" default-active="u1">
            <el-menu-item index="u1">
              <img
                src="/src/assets/images/default-avatar.jpg"
                alt="default avatar"
                style="object-fit: cover; width: 20px; height: 20px; margin-right: 5px"
                class="el-avatar el-avatar--circle" />
              用户1
            </el-menu-item>
            <el-menu-item index="u2">
              <img
                src="/src/assets/images/default-avatar.jpg"
                alt="default avatar"
                style="object-fit: cover; width: 20px; height: 20px; margin-right: 5px"
                class="el-avatar el-avatar--circle" />
              用户2
            </el-menu-item>
            <el-menu-item index="u3">
              <img
                src="/src/assets/images/default-avatar.jpg"
                alt="default avatar"
                style="object-fit: cover; width: 20px; height: 20px; margin-right: 5px"
                class="el-avatar el-avatar--circle" />
              用户3
            </el-menu-item>
            <el-menu-item index="u4">
              <img
                src="/src/assets/images/default-avatar.jpg"
                alt="default avatar"
                style="object-fit: cover; width: 20px; height: 20px; margin-right: 5px"
                class="el-avatar el-avatar--circle" />
              用户4
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="20" style="max-height: 45vh">
          <el-row style="height: 80%; width: 100%">
            <el-scrollbar ref="scrollbar" :always="true" style="width: 100%">
              <MessageItem :is_me="true" />
              <MessageItem :is_me="false" />
              <MessageItem :is_me="true" />
              <MessageItem :is_me="true" />
              <MessageItem :is_me="false" />
              <MessageItem :is_me="false" />
              <MessageItem :is_me="true" />
              <MessageItem :is_me="false" />
              <MessageItem :is_me="true" />
            </el-scrollbar>
          </el-row>

          <el-row style="height: 5%; margin: 0.5em 0.5em 1em">
            <el-button link>
              <icons name="icon-IM" style="width: 1.3em; height: 1.3em" />
            </el-button>
          </el-row>

          <el-row style="height: 15%">
            <el-input v-model="message" resize="none" type="textarea" placeholder="请输入回复消息" />
          </el-row>
        </el-col>
      </el-row>
    </template>

    <!-- 底部 -->
    <template v-slot:footer>
      <el-row justify="end" align="middle" style="height: 10%; padding-right: 10px">
        <el-button style="margin-right: 10px" type="info" @click="handleMinimizeIm">关闭</el-button>
        <el-dropdown split-button type="primary">
          发送
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>快捷回复 1</el-dropdown-item>
              <el-dropdown-item>快捷回复 2</el-dropdown-item>
              <el-dropdown-item>快捷回复 3</el-dropdown-item>
              <el-dropdown-item>快捷回复 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-row>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useSystemStore from "@/plugin/store/modules/useSystemStore";
import Icons from "@/components/common/Icons.vue";
import MessageItem from "@/components/IM/components/MessageItem.vue";

export default defineComponent({
  name: "IM",
  components: { Icons, MessageItem },
  data() {
    return {
      show: useSystemStore().IM,
      message: ""
    };
  },
  created() {
    useSystemStore().$subscribe((_mutation, state) => {
      this.show = state.IM;
      if (this.show) {
        this.$nextTick(() => {
          (this.$refs.scrollbar as any).setScrollTop(99999);
        });
      }
    });
  },
  mounted() {},
  methods: {
    handleMinimizeIm() {
      useSystemStore().IM = false;
    }
  }
});
</script>

<style scoped lang="scss">
:deep(.el-card__header) {
  padding: calc(var(--el-card-padding) - 10px) calc(var(--el-card-padding));
}

:deep(.el-card__body) {
  padding: 0;
  height: 100%;
}

:deep(.el-dialog__body) {
  padding-top: 10px;
  border: 1px #dcdfe6 solid;
  max-height: 45vh;
}

:deep(.el-menu) {
  border: none;
}

:deep(.el-menu-item) {
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
}

:deep(.el-textarea__inner) {
  height: 100%;
  width: 100%;
  border-radius: 0;
}
</style>
