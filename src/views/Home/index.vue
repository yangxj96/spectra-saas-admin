<template>
  <el-row class="box-content">
    <div v-authority="'_ROLE_SYSADMIN'">有权限</div>
    <input ref="fs" type="file" />
  </el-row>
</template>

<script lang="ts">
export default defineComponent({
  name: "Home",
  created() {
    let o = {
      code: 10,
      msg: "success"
    };
    console.log(ConvertUtils.json2FormData(o));
  }
});
</script>

<style scoped lang="scss">
.box-content {
  width: 100%;
  height: 100%;
}
</style>
