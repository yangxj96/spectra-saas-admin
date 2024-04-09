<template>
  <div style="height: 100%">
    <el-dialog
      :model-value="true"
      destroy-on-close
      @close="handleClose"
      :title="`用户[${options.user.username}]日志`"
      width="80%"
      class="loading-box">
      <el-row>
        <el-table :data="data" stripe border height="100%" style="width: 100%">
          <el-table-column type="expand">
            <template #default="datum">
              <pre>{{ JSON.stringify(JSON.parse(datum.row.response_result), null, 4) }}</pre>
            </template>
          </el-table-column>
          <el-table-column label="操作ID" prop="id" align="center" width="140" />
          <el-table-column label="请求时间" prop="created_time" align="center" width="180" />
          <el-table-column label="响应状态" prop="response_status" align="center" width="90">
            <template #default="datum">
              <el-tag :type="handleChooseResponseStatusTagType(datum.row.response_status)">
                {{ datum.row.response_status }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作IP" prop="ip" align="center" width="135" />
          <el-table-column label="请求URL" prop="url" header-align="center" />
          <el-table-column label="备注" prop="remark" align="center" width="200" :show-overflow-tooltip="true" />
        </el-table>
      </el-row>

      <el-row style="float: right; height: 50px">
        <el-pagination
          v-model:currentPage="pagination.page"
          hide-on-single-page
          background
          :page-sizes="pagination.page_sizes"
          :layout="'sizes,prev, pager, next'"
          :total="pagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </el-row>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useTable } from "@/hooks/UseTable";
import AccountApi from "@/api/AccountApi";
import { onMounted, ref, watch } from "vue";
import type { Account, UserList, UserOperateLog } from "@/types";
import CommonUtils from "@/utils/CommonUtils";

const { pagination, handleSizeChange, handleCurrentChange } = useTable<Account>(AccountApi.page);

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["close"]);

const options = ref({
  user: {} as UserList
});

const data = ref<UserOperateLog[]>([]);

onMounted(() => {
  let status: number[] = [200, 204, 206, 301, 302, 303, 304, 400, 401, 403, 404, 500, 503];
  for (let i = 0; i < 10; i++) {
    data.value.push({
      id: CommonUtils.getRandom(10000000, 99999999),
      created_time: "2022-12-12 00:00:00",
      url: "/baidu.com",
      response_status: status[CommonUtils.getRandom(1, status.length)],
      response_result: JSON.stringify({ code: 0, message: "操作成功" }),
      ip: "127.0.0.1"
    });
  }
});

/**
 * 处理响应状态啊选择
 * @param val 对应的值
 */
function handleChooseResponseStatusTagType(val: number) {
  if (val >= 200 && val <= 300) {
    return "success";
  } else {
    return "danger";
  }
}

/**
 * 处理关闭
 */
function handleClose() {
  emit("close", false);
}

watch(
  () => props.user,
  (newVal: any, oldValue: any) => {
    console.log("旧的值", oldValue);
    options.value.user = newVal;
  },
  { immediate: true }
);
</script>
