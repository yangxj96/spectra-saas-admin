<template>
  <div style="height: 100%">
    <!-- 查询条件 -->
    <el-row style="height: 50px">
      <el-form :inline="true" :model="condition">
        <el-form-item label="用户名">
          <el-input v-model="condition.username" placeholder="请输入用户名" :clearable="true" />
        </el-form-item>
        <el-form-item label="组织机构">
          <el-select v-model="condition.org_id" placeholder="请选择组织机构" :clearable="true">
            <el-option label="云南省" value="云南省" />
            <el-option label="保山市" value="保山市" />
          </el-select>
        </el-form-item>
        <el-form-item label="启用状态">
          <el-select v-model="condition.enable" placeholder="请选择启用状态" :clearable="true">
            <el-option label="启用" :value="true" />
            <el-option label="禁用" :value="false" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">
              <icons name="icon-search" />
              &nbsp;查询
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>
    <!-- 表格 -->
    <el-row style="height: calc(100% - 100px)">
      <el-table :data="table_data" stripe border height="100%" style="width: 100%">
        <el-table-column align="center" width="190" prop="id" label="ID" />
        <el-table-column align="center" prop="username" :show-overflow-tooltip="true" label="账户" />
        <el-table-column align="center" prop="password" label="密码" />
        <el-table-column align="center" prop="org_name" label="所属组织" />
        <el-table-column align="center" width="165" prop="last_login_time" label="上次登录时间" />
        <el-table-column align="center" width="135" prop="last_login_ip" label="上次登录IP" />
        <el-table-column align="center" width="85" label="锁定状态">
          <template #default="scope">
            <el-switch v-model="scope.row.lock" />
          </template>
        </el-table-column>
        <el-table-column align="center" width="85" label="启用状态">
          <template #default="scope">
            <el-switch v-model="scope.row.enable" />
          </template>
        </el-table-column>
        <el-table-column align="center" width="140" label="操作">
          <template #default="datum">
            <el-tooltip effect="dark" content="重置密码" placement="top">
              <el-button link @click="handleResetPassword(datum.row)">
                <icons name="icon-reset-password" class-name="icon-cls" />
              </el-button>
            </el-tooltip>

            <el-tooltip effect="dark" content="操作日志" placement="top">
              <el-button link @click="showLog(datum.row)">
                <icons name="icon-log" class-name="icon-cls" />
              </el-button>
            </el-tooltip>

            <el-tooltip effect="dark" content="角色管理" placement="top">
              <el-button link>
                <icons name="icon-role-manager" class-name="icon-cls" />
              </el-button>
            </el-tooltip>
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

    <!-- 组件区 -->
    <Log v-if="options.log.user.id" :user="options.log.user" @close="onInit" />
  </div>
</template>

<script lang="ts">
import Table from "@/mixins/Table";
import Log from "./components/Log/index.vue";
import { type UserList } from "@/model/User";
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",
  mixins: [Table],
  components: {
    Log
  },
  data() {
    return {
      condition: {
        username: "",
        org_id: undefined,
        enable: true
      },
      options: {
        log: {
          user: {} as UserList
        }
      }
    };
  },
  created() {
    this.onInit();
  },
  methods: {
    onInit() {
      this.options.log.user = {} as UserList;
      this.table_data = [
        {
          id: "1628283509519011841",
          username: "sysadmin",
          password: "password",
          org_name: "我是组织",
          last_login_time: "2022-08-12 00:36:05",
          last_login_ip: "255.255.255.255",
          lock: false,
          enable: true
        },
        {
          id: "1628283509519011841",
          username: "devadmin",
          password: "password",
          org_name: "我是组织",
          last_login_time: "2022-08-12 00:36:05",
          last_login_ip: "127.0.0.1",
          lock: false,
          enable: true
        },
        {
          id: "1628283509519011841",
          username: "oldadmin",
          password: "password",
          org_name: "我是组织",
          last_login_time: "2022-08-12 00:36:05",
          last_login_ip: "127.0.0.1",
          lock: true,
          enable: true
        }
      ];
    },
    handleSizeChange(val: number) {
      console.log(`minix重写每页数量: ${val}`);
    },
    handleCurrentChange(val: number) {
      console.log(`minix重写当前页: ${val}`);
    },
    showLog(row: any) {
      this.options.log.user = row;
    },
    handleResetPassword(row: UserList) {
      this.$confirm(`是否重置${row.username}的密码`, "重置密码", {
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
</script>

<style scoped lang="scss">
.icon-cls {
  width: 1.4em;
  height: 1.4em;
  color: var(--el-color-primary);
}
</style>
