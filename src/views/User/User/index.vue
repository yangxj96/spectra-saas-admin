<template>
    <div style="height: 100%">
        <!-- 查询条件 -->
        <el-row style="height: 50px">
            <el-form :inline="true" :model="condition">
                <el-form-item label="用户名">
                    <el-input v-model="condition.username" placeholder="请输入用户名" :clearable="true"/>
                </el-form-item>
                <el-form-item label="组织机构">
                    <el-select v-model="condition.org_id" placeholder="请选择组织机构" :clearable="true">
                        <el-option label="云南省" value="云南省"/>
                        <el-option label="保山市" value="保山市"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="启用状态">
                    <el-select v-model="condition.enable" placeholder="请选择启用状态" :clearable="true">
                        <el-option label="启用" :value="true"/>
                        <el-option label="禁用" :value="false"/>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button-group>
                        <el-button type="primary"><IconSearch/>&nbsp;查询</el-button>
                    </el-button-group>
                </el-form-item>
            </el-form>
        </el-row>
        <!-- 表格 -->
        <el-row style="height: calc(100% - 100px)">
            <!-- @formatter:off -->
          <el-table :data="table_data" stripe border  height="100%" style="width: 100%">
              <el-table-column label="ID"        prop="id" width="140"/>
              <el-table-column label="账户"       prop="username" :show-overflow-tooltip="true"/>
              <el-table-column label="密码"       prop="password"/>
              <el-table-column label="所属组织"    prop="org_name"/>
              <el-table-column label="上次登录时间" prop="last_login_time"/>
              <el-table-column label="上次登录IP"  prop="last_login_ip"/>
              <el-table-column label="锁定状态" width="100">
                  <template #default="scope">
                      <el-switch v-model="scope.row.lock" />
                  </template>
              </el-table-column>
              <el-table-column label="启用状态" width="100">
                  <template #default="scope">
                      <el-switch v-model="scope.row.enable" />
                  </template>
              </el-table-column>
              <el-table-column label="操作" width="280">
                  <template #default="datum">
                      <el-button :icon="'Search'" text type="primary" @click="handleResetPassword(datum.row)">重置密码</el-button>
                      <el-button :icon="'Edit'" text type="primary" @click="showLog(datum.row)" >操作日志</el-button>
                  </template>
              </el-table-column>
          </el-table>
          <!-- @formatter:on -->
        </el-row>
        <!-- 分页 -->
        <el-row style="float: right;height: 50px">
            <el-pagination
                v-model:currentPage="pagination.page"
                hide-on-single-page
                background
                :page-sizes="pagination.page_sizes"
                :layout="'sizes,prev, pager, next'"
                :total="pagination.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </el-row>

        <!-- 组件区 -->
        <Log v-if="options.log.user.id" :user="options.log.user" @close="onInit"/>

    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import Table from "@/mixins/Table";
import {UserList} from "@/api/UserApi";
import Log from './components/Log/index.vue';
import IconSearch from "@/icon/IconSearch.vue";

export default defineComponent({
    name: 'user-user',
    mixins: [Table],
    components: {
        IconSearch,
        Log
    },
    data() {
        return {
            condition: {
                username: '',
                org_id: undefined,
                enable: true
            },
            options: {
                log: {
                    user: {} as UserList
                }
            }
        }
    },
    created() {
        this.onInit();
    },
    methods: {
        onInit() {
            this.options.log.user = {} as UserList;
            this.table_data = [
                {
                    id: 1000000000000,
                    username: 'sysadmin',
                    password: 'password',
                    org_name: '我是组织',
                    last_login_time: '2022-08-12 00:36:05',
                    last_login_ip: '127.0.0.1',
                    lock: false,
                    enable: true
                },
                {
                    id: 1000000000002,
                    username: 'devadmin',
                    password: 'password',
                    org_name: '我是组织',
                    last_login_time: '2022-08-12 00:36:05',
                    last_login_ip: '127.0.0.1',
                    lock: false,
                    enable: true
                },
                {
                    id: 1000000000003,
                    username: 'oldadmin',
                    password: 'password',
                    org_name: '我是组织',
                    last_login_time: '2022-08-12 00:36:05',
                    last_login_ip: '127.0.0.1',
                    lock: true,
                    enable: true
                }
            ]
        },
        handleSizeChange(val: number) {
            console.log(`minix重写每页数量: ${val}`)
        },
        handleCurrentChange(val: number) {
            console.log(`minix重写当前页: ${val}`)
        },
        showLog(row: any) {
            this.options.log.user = row
        },
        handleResetPassword(row: UserList) {
            this.$confirm(`是否重置${row.username}的密码`, '重置密码', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                console.log('ok');
            }).catch(() => {
                console.log('点击取消')
            })
        }
    }
})

</script>


<style scoped>

</style>
