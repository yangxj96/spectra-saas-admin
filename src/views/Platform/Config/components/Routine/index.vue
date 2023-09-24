<template>
  <div style="height: 94%">
    <!-- 查询条件 -->
    <el-row style="height: 50px">
      <el-form :inline="true" :model="condition">
        <el-form-item label="配置键">
          <el-input v-model="condition.key" placeholder="请输入配置键" :clearable="true" />
        </el-form-item>
        <el-form-item label="配置值">
          <el-input v-model="condition.value" placeholder="请输入配置键" :clearable="true" />
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">
              <icons name="icon-search" />
              查询
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>

    <!-- 表格 -->
    <el-row style="height: calc(100% - 100px)">
      <el-table :data="table_data" stripe border height="100%" style="width: 100%">
        <el-table-column label="ID" prop="id" width="190" align="center" />
        <el-table-column label="配置键" prop="key" align="center" />
        <el-table-column label="配置值" prop="value_str" align="center" />
        <el-table-column label="值类型" prop="type_str" align="center" />
        <el-table-column label="说明" prop="remark" align="center" />
        <el-table-column label="操作" width="130" align="center">
          <template #default="datum">
            <el-button text type="primary" @click="onEditorConfig(datum.row)">
              <icons name="icon-edit" />
              &nbsp;编辑
            </el-button>
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

    <Editor v-if="options.editor.datum.id" :datum="options.editor.datum" @close="initData" />
  </div>
</template>

<script lang="ts">
import Table from "@/mixins/Table";
import Editor from "@/views/Platform/Config/components/Routine/components/Editor/index.vue";
import { type SystemConfig } from "@/model/System";
import { defineComponent } from "vue";
import Icons from "@/components/common/Icons.vue";

/**
 * 常规配置
 */
export default defineComponent({
  name: "SystemConfigRoutine",
  components: { Icons, Editor },
  mixins: [Table],
  data() {
    return {
      condition: {
        key: "",
        value: undefined
      },
      options: {
        editor: {
          datum: {} as SystemConfig
        }
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.options.editor.datum = {} as SystemConfig;
      this.table_data = [
        {
          id: "1628283509519011841",
          key: "sys.default.password",
          type: 1,
          type_str: "字符串",
          value: "123456",
          value_str: "123456",
          remark: "默认密码"
        },
        {
          id: "1628283509519011841",
          key: "sys.default.avatar",
          type: 1,
          type_str: "字符串",
          value: "/api/file/oss/default/avatar.png",
          value_str: "/api/file/oss/default/avatar.png",
          remark: "默认头像地址"
        },
        {
          id: "1628283509519011841",
          key: "sys.default.gender",
          type: 2,
          type_str: "单选字典",
          value: "0",
          value_str: "男",
          remark: "默认性别",
          items: [
            { name: "男", value: 0 },
            { name: "女", value: 1 },
            { name: "未知", value: 2 }
          ]
        },
        {
          id: "1628283509519011841",
          key: "sys.default.free_modules",
          type: 3,
          type_str: "多选字典",
          value: "0,1",
          value_str: "OA,管理",
          remark: "默认的免费模块",
          items: [
            { name: "OA", value: 0 },
            { name: "管理", value: 1 },
            { name: "OSS", value: 2 }
          ]
        }
      ];
    },
    onEditorConfig(row: SystemConfig) {
      this.options.editor.datum = row;
    }
  }
});
</script>
