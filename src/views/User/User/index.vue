<template>
    <el-row style="height: 5%">
        <el-form :inline="true" :model="condition">
            <el-form-item label="用户名">
                <el-input v-model="condition.username" placeholder="请输入用户名" clearable/>
            </el-form-item>
            <el-form-item label="组织机构">
                <el-select v-model="condition.org_id" placeholder="请选择组织机构" clearable>
                    <el-option label="云南省" value="云南省" />
                    <el-option label="保山市" value="保山市" />
                </el-select>
            </el-form-item>
            <el-form-item label="启用状态">
                <el-select v-model="condition.enable" placeholder="请选择启用状态" clearable>
                    <el-option label="启用"  :value="true" />
                    <el-option label="禁用"  :value="false"/>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button-group>
                    <el-button type="primary" icon="Search">查询</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </el-row>

    <el-row style="height: 87%">
        <!-- @formatter:off -->
        <el-table :data="table_data" stripe border  height="100%" style="width: 100%">
            <el-table-column label="ID"        prop="id" width="140"/>
            <el-table-column label="账户"       prop="username" show-overflow-tooltip/>
            <el-table-column label="密码"       prop="password"/>
            <el-table-column label="所属组织"    prop="org_name"/>
            <el-table-column label="上次登录时间" prop="last_login_time"/>
            <el-table-column label="上次登录IP"  prop="last_login_ip"/>
            <el-table-column label="启用状态" width="100">
                <template #default="scope">
                    <el-switch v-model="scope.enable" />
                </template>
            </el-table-column>
            <el-table-column label="操作"     fixed="right" width="280">
                <template #default>
                    <el-button text type="primary" >详情</el-button>
                    <el-button text type="primary" >重置密码</el-button>
                    <el-button text type="primary" >操作日志</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- @formatter:on -->
    </el-row>

    <el-row style="float: right;height: 8%">
        <el-pagination
            v-model:currentPage="pagination.page"
            hide-on-single-page
            background
            :page-sizes="pagination.page_sizes"
            layout="sizes,prev, pager, next"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </el-row>

</template>

<script lang="ts">

import {Options, mixins} from "vue-property-decorator";
import table from "@/mixins/Table";

// 分页参数实体
interface TableData {
    id : number,
    username: string,
    password: string,
    org_name: string,
    last_login_time: string,
    last_login_ip: string,
    enable  : boolean,
}


@Options({})
export default class User extends mixins(table<TableData>) {

    // 搜索条件
    public condition = {
        username: '',
        org_id  : '云南省',
        enable  : true
    }

    public created() {
        for (let i = 0; i < 13; i++) {
            this.table_data.push({
                id : 1000000000000 + i,
                username: 'username' + i,
                password: 'password' + i,
                org_name: '我是组织' + i,
                last_login_time: '2022-8-12 00:36:05',
                last_login_ip: '127.0.0.' + i,
                enable  : true
            })
        }
    }

}

</script>

<style scoped>

</style>
