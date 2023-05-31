<template>
  <el-row align="top" class="box-item">
    <el-col :span="2">
      <el-avatar
        :src="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c'" />
    </el-col>

    <el-col :span="22">
      <el-card style="margin-left: 10px; background-color: #409eff; padding: 10px" shadow="never">
        <span>
          消息内消息内容消息内消息内容消息内容消息内容消息内容消息内容消息内容容消息内消息内容消息内容消息内容消息内容消息内容消息内容容消消息内消息内容消息内容消息内容消息内容消息内容消息内容容消息内消息内容消息内容消息内容消息内容消息内容消息内容容息内容消息内容消息内容消息内容消息内容容
        </span>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
export default defineComponent({
  name: "ImMessageItem"
});
</script>

<style scoped lang="scss">
.box-item {
  width: 100%;
  margin-top: 10px;
}
</style>
