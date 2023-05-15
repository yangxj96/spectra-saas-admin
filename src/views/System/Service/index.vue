<template>
  <div style="height: 100%">
    <el-row style="height: 1.2%"></el-row>

    <el-row style="height: 90.8%">
      <el-table :data="table_data" stripe border height="100%" style="width: 100%">
        <el-table-column label="序号" type="index" width="80" />
        <el-table-column label="服务名称" prop="date" width="180" />
        <el-table-column label="说明" prop="name" width="180" :show-overflow-tooltip="true" />
        <el-table-column label="实例数量" prop="num" width="120" />
        <el-table-column label="实例状态" prop="num" />
        <el-table-column label="操作" width="120">
          <template #default>
            <el-button text type="primary" @click="handleShowDetails">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row style="float: right;height: 8%">
      <el-pagination
        v-model:currentPage="pagination.page"
        hide-on-single-page
        background
        :page-sizes="pagination.page_sizes"
        :layout="'sizes,prev,pager,next'"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>

    <service-details :id="detailId" :visible="detailsPopupShow" @submit="handleSubmitDetails">
      <!--<template v-slot:footer>-->
      <!--    我是插槽内容-->
      <!--</template>-->
    </service-details>
  </div>
</template>

<script lang="ts">

import table from "@/mixins/Table";
import ServiceDetails from "./components/details.vue";

export default defineComponent({
  name: "service",
  components: {
    ServiceDetails
  },
  mixins: [table],
  created() {
    for (let i = 0; i < 17; i++) {
      this.table_data.push({
        date: "用户服务",
        name: "用户服务服务",
        num: 8
      });
    }
  },
  data() {
    const table_data: TableData[] = [];
    return {
      table_data: table_data,
      detailId: "",
      detailsPopupShow: false
    };
  },
  methods: {
    handleShowDetails() {
      this.detailId = "1";
      this.detailsPopupShow = !this.detailsPopupShow;
    },
    handleSubmitDetails() {
      this.detailsPopupShow = false;
    }
  }
});

interface TableData {
  date: String,
  name: String,
  num: Number
}

</script>

<style scoped lang="scss">


</style>
