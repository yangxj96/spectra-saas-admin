<template>
  <el-card class="box-im" shadow="always">
    <template v-slot:header>即时通讯</template>
    <el-row style="height: 100%">
      <el-col :span="6" style="height: 100%">
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
        <el-row style="height: 60%; width: 100%; padding: 10px">
          <ImMessageItem style="width: 100%; height: 20px" />
        </el-row>

        <el-row style="height: 20%">
          <el-input resize="none" type="textarea" placeholder="请输入回复消息" />
        </el-row>

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
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImMessageItem from "@/components/IM/MessageItem/index.vue";

export default defineComponent({
  name: "IM",
  components: { ImMessageItem }
});
</script>

<style scoped lang="scss">
.box-im {
  max-width: 50vw;
  min-width: 40vw;

  max-height: 50vh;
  height: 100%;

  z-index: 1000;

  position: absolute;
  right: 1vw;
  bottom: 1vh;
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
</style>
