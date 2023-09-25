<template>
  <div style="height: 100%">
    <el-row style="height: 1.2%" />

    <el-row style="height: 90.8%">
      <el-table :data="table_data" stripe border height="100%" empty-text="暂无数据" style="width: 100%">
        <el-table-column label="序号" type="index" width="80" />
        <el-table-column label="路由ID" prop="route_id" width="200" :show-overflow-tooltip="true" />
        <el-table-column label="排序" prop="order" width="60" :show-overflow-tooltip="true" />
        <el-table-column label="URI" prop="uri" width="200" :show-overflow-tooltip="true" />
        <el-table-column label="过滤器" prop="filters" :show-overflow-tooltip="true" />
        <el-table-column label="断言器" prop="predicates" :show-overflow-tooltip="true" />
        <el-table-column label="元数据" prop="metadata" :show-overflow-tooltip="true" />
        <el-table-column label="操作" width="120" fixed="right">
          <template #default>
            <el-button text type="primary" @click="handleShowDetails">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row style="float: right; height: 8%">
      <el-pagination
        v-model:currentPage="pagination.page"
        hide-on-single-page
        background
        :page-sizes="pagination.page_sizes"
        :layout="'sizes,prev,pager,next'"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </el-row>
  </div>
</template>

<script lang="ts">
import table from "@/mixins/Table";
import { defineComponent } from "vue";
import RouteApi from "@/api/RouteApi";
import { IResult, Page, Route } from "@/types";

export default defineComponent({
  name: "SystemRoute",
  mixins: [table],
  mounted() {
    this.initData();
  },
  data() {
    const table_data: Route[] = [];
    return {
      table_data: table_data
    };
  },
  methods: {
    initData() {
      RouteApi.query().then(res => this.handleResponse(res));
    },
    handleSizeChange(val: number) {
      console.log(`每页数量: ${val}`);
      RouteApi.query(this.pagination.page, val).then(res => this.handleResponse(res));
    },
    handleCurrentChange(val: number) {
      console.log(`当前页: ${val}`);
      RouteApi.query(val, this.pagination.size).then(res => this.handleResponse(res));
    },
    handleResponse(res: IResult<Page<Route>>) {
      if (res.code == 0 && res.data.records != null) {
        this.table_data = res.data.records;
        this.pagination.size = res.data.size;
        this.pagination.page = res.data.current;
        this.pagination.total = res.data.total;
      }
    },
    handleShowDetails() {
      this.$message.warning({ message: "开发中" });
    }
  }
});
</script>

<style scoped lang="scss"></style>
