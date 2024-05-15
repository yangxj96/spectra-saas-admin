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
          <template #default="scope">
            <el-button text type="primary" @click="handleShowDetails(scope.row)">详情</el-button>
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

    <router-details v-model="details.show" :route="details.datum" @close="handleCloseDetails" />
  </div>
</template>

<script lang="ts" setup>
import { useTable } from "@/hooks/UseTable";
import RouteApi from "@/api/RouteApi";
import RouterDetails from "./Details/index.vue";
import { reactive } from "vue";
import type { Route } from "@/types";

const { table_data, pagination, handleCurrentChange, handleSizeChange } = useTable(RouteApi.page);

const details = reactive({
  show: false,
  datum: {} as Route
});

function handleShowDetails(row: Route) {
  details.datum = row;
  details.show = true;
}

function handleCloseDetails() {
  details.datum = {} as Route;
  details.show = false;
  // 重新获取当前页内容
  handleSizeChange(pagination.value.size);
}
</script>
