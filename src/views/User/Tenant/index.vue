<template>
  <div style="height: 100%">
    <!-- 查询条件 -->
    <el-row style="height: 50px">
      <el-form :inline="true" :model="condition">
        <el-form-item label="公司名称">
          <el-input v-model="condition.company_name" placeholder="请输入公司名称" :clearable="true" />
        </el-form-item>
        <el-form-item label="冻结状态">
          <el-select v-model="condition.enable" placeholder="请选择冻结状态" :clearable="true">
            <el-option label="正常" :value="true" />
            <el-option label="冻结" :value="false" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">
              <icons name="icon-search" />
              &nbsp;查询
            </el-button>
            <el-button type="primary" @click="$router.push({ path: '/User/Tenant/Register' })">
              <icons name="icon-add" />
              &nbsp;注册
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <el-row style="height: calc(100% - 100px)">
      <el-table :data="table_data" highlight-current-row stripe border height="100%" style="width: 100%">
        <el-table-column label="租户编号" prop="id" width="140" align="center" :show-overflow-tooltip="true" />
        <el-table-column label="公司名称" prop="company_name" align="center" :show-overflow-tooltip="true" />
        <el-table-column label="管理账号" align="center">
          <template #default="datum">
            <el-button type="primary" link>{{ datum.row.admin.username }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" prop="contact" align="center" width="120" />
        <el-table-column label="公司地址" prop="address" align="center" :show-overflow-tooltip="true" />
        <el-table-column label="已购模块" prop="modules" align="center" :show-overflow-tooltip="true" />
        <el-table-column label="创建时间" prop="created_time" align="center" />
        <el-table-column label="到期时间" prop="expiration_time" align="center" />
        <el-table-column label="剩余时间" prop="remaining_time" align="center" />
        <el-table-column label="操作" width="150">
          <template #default="datum">
            <el-button link type="primary" @click="handleLockTenant(datum.row)">冻结</el-button>
            <el-button link type="primary" @click="$router.push({ path: '/User/Tenant/Details', query: { id: datum.row.id } })">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 分页 -->
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
  </div>
</template>

<script lang="ts">
import table from "@/mixins/Table";
import { defineComponent } from "vue";
import DateUtils from "@/utils/DateUtils";
import Icons from "@/components/common/Icons.vue";

export default defineComponent({
  name: "UserTenant",
  components: { Icons },
  mixins: [table],
  data() {
    return {
      condition: {
        company_name: "",
        enable: undefined
      },
      options: {}
    };
  },
  created() {
    for (let i = 0; i < 14; i++) {
      let datum: TableData = {
        id: 10000000000 + i,
        company_name: "云南XXX有限公司",
        admin: {
          user_id: 1111111111111,
          username: `用户名${i + 1}`
        },
        contact: "131xxxx2222",
        address: "云南省昆明市西山区XXX街道XX大厦XX栋XX层1111",
        modules: "基础模块,OA协同,审核模块",
        created_time: DateUtils.formatting(new Date(), "yyyy-MM-dd"),
        expiration_time: DateUtils.formatting(new Date(), "yyyy-MM-dd"),
        remaining_time: Math.round(Math.random() * 10) + i
      };
      this.table_data.push(datum);
    }
  },
  methods: {
    handleLockTenant(row: any) {
      this.$confirm(`是否冻结[${row.company_name}]`, "冻结租户", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("ok");
        })
        .catch(() => {
          console.log("点击取消");
        });
    }
  }
});

interface TableData {
  id: number;
  company_name: string;
  admin: {
    user_id: number;
    username: string;
  };
  contact: string;
  address: string;
  modules: string;
  created_time: string;
  expiration_time: string;
  remaining_time: number;
}
</script>

<style scoped></style>
