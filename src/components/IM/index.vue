<template>
  <el-dialog v-model="show" :modal="false" :append-to-body="true" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" draggable>
    <!-- 头部 -->
    <template v-slot:header>
      <el-row>
        <el-col :span="23">
          <icons name="icon-IM" style="width: 1.3em; height: 1.3em" />
          <span style="margin-left: 4px">即时通讯</span>
        </el-col>
        <el-col :span="1">
          <el-button link style="float: right">
            <icons name="icon-im-lessen" style="width: 1.3em; height: 1.3em" />
          </el-button>
        </el-col>
      </el-row>
    </template>

    <!-- 内容 -->
    <el-row style="height: 100%">
      <el-col :span="6">
        <el-menu style="height: 100%">
          <el-menu-item>
            <el-avatar
              :size="20"
              :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
            用户1
          </el-menu-item>
          <el-menu-item>
            <el-avatar
              :size="20"
              :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
            用户2
          </el-menu-item>
          <el-menu-item>
            <el-avatar
              :size="20"
              :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
            用户3
          </el-menu-item>
          <el-menu-item>
            <el-avatar
              :size="20"
              :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
            用户4
          </el-menu-item>
          <el-menu-item>
            <el-avatar
              :size="20"
              :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
            用户5
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-row style="height: 80%; width: 100%; padding: 10px; overflow-y: auto">
          <ImMessageItem />
          <ImMessageItem />
          <ImMessageItem />
        </el-row>
        <el-row style="width: 5%; padding-left: 5px; padding-right: 5px">
          <el-button link>
            <icons name="icon-IM" style="width: 1.3em; height: 1.3em" />
          </el-button>
        </el-row>
        <el-row style="height: 15%">
          <el-input resize="none" type="textarea" placeholder="请输入回复消息" />
        </el-row>
      </el-col>
    </el-row>

    <!-- 底部 -->
    <template v-slot:footer>
      <el-row justify="end" align="middle" style="height: 10%; padding-right: 10px">
        <el-button style="margin-right: 10px" type="info">关闭</el-button>
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
import ImMessageItem from "@/components/IM/MessageItem/index.vue";

export default defineComponent({
  name: "IM",
  components: { ImMessageItem },
  data() {
    return {
      show: true
    };
  }
});
</script>

<style scoped lang="scss">
.box-im {
}

:deep(.el-card__body) {
  padding: 0;
  height: 100%;
}

:deep(.el-card__header) {
  padding: calc(var(--el-card-padding) - 10px) calc(var(--el-card-padding));
}

:deep(.el-textarea__inner) {
  height: 100%;
  width: 100%;
}

:deep(.el-textarea__inner) {
  border-radius: 0;
}

:deep(.el-dialog__body) {
  padding-top: 10px;
  border: 1px #dcdfe6 solid;
}
</style>
