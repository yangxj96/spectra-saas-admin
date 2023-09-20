<template>
  <el-dialog v-model="show" :modal="false" :append-to-body="true" :show-close="false" :destroy-on-close="true" :close-on-click-modal="false" :close-on-press-escape="false" draggable>
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
          <el-menu style="height: 100%" default-active="u1">
            <el-menu-item index="u1">
              <el-avatar :size="20" :src="getAssets('../assets/images/default-avatar.jpg')" />
              用户1
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="20" style="max-height: 45vh">
          <el-row style="height: 80%">
            <el-scrollbar style="padding: 1.3em">
              <ImMessageItemYou />
              <ImMessageItemMe />
              <ImMessageItemYou />
              <ImMessageItemMe />
            </el-scrollbar>
          </el-row>

          <el-row style="height: 5%; margin: 0.5em">
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
import { getAssets } from "@/utils/CommonUtils";
import { defineComponent } from "vue";
import useSystemStore from "@/plugin/store/modules/useSystemStore";

export default defineComponent({
  name: "IM",
  data() {
    return {
      show: useSystemStore().IM,
      message: ""
    };
  },
  created() {
    useSystemStore().$subscribe((mutation, state) => {
      this.show = state.IM;
    });
  },
  methods: {
    getAssets,
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

:deep(.el-textarea__inner) {
  height: 100%;
  width: 100%;
}

:deep(.el-textarea__inner) {
  border-radius: 0;
}
</style>
