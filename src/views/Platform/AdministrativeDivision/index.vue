<template>
  <div style="height: 100%">
    <el-row>
      <el-form :inline="true">
        <el-form-item label="区划名称">
          <el-input placeholder="请输入区划名称" />
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary" @click="search">
              <icons name="icon-search" />
              &nbsp;查询
            </el-button>
            <el-button type="primary" @click="addData">
              <icons name="icon-add" />
              &nbsp;新增
            </el-button>
            <el-button type="primary" @click="editData">
              <icons name="icon-edit" />
              &nbsp;编辑
            </el-button>
            <el-button type="danger" @click="delData">
              <icons name="icon-del" />
              &nbsp;删除
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>

    <el-divider style="margin: 0" />

    <el-row class="box-content">
      <!-- 菜单树 -->
      <el-col :span="6" class="tree">
        <el-tree
          ref="tree"
          :data="tree_data"
          :props="{ children: 'children', label: 'name' }"
          @node-click="treeNodeClick">
          <template #default="{ node, data }">
            <span>
              <span>{{ node.label }}</span>
              <span>
                <el-tag style="margin-left: 10px" type="primary">
                  {{ data.level == undefined ? "国级" : data.level }}
                </el-tag>
              </span>
            </span>
          </template>
        </el-tree>
      </el-col>
      <!-- 菜单信息 -->
      <el-col :span="18">
        <el-form :model="menu_details" label-width="120px" style="margin-top: 1%">
          <el-form-item label="主键ID:">
            <span>{{ menu_details.id }}</span>
          </el-form-item>
          <el-form-item label="名称:">
            <span>{{ menu_details.name }}</span>
          </el-form-item>
          <el-form-item label="上级ID:">
            <span>{{ menu_details.pid }}</span>
          </el-form-item>
          <el-form-item label="等级:">
            <span>{{ menu_details.level == undefined ? "国级" : menu_details.level }}</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Icons from "@/components/common/Icons.vue";
import { ref } from "vue";
import type { AdministrativeDivision, AdministrativeDivisionTree } from "@/types";
import AdministrativeDivisionApi from "@/api/AdministrativeDivisionApi";
import { ElMessage, type ElTree } from "element-plus";

const tree = ref<InstanceType<typeof ElTree>>();

const menu_details = ref<AdministrativeDivision>({
  id: "",
  name: "",
  pid: "",
  level: ""
});

let tree_data = ref<AdministrativeDivisionTree[]>();

AdministrativeDivisionApi.tree().then(res => {
  if (res.data) {
    tree_data.value = res.data;
  }
});

function search() {}

function addData() {}

function editData() {}

function delData() {
  let currentNode = tree.value!.getCurrentNode();
  if (!currentNode) {
    ElMessage.error({
      message: "请选中一条数据"
    });
    return;
  }
  AdministrativeDivisionApi.remote(currentNode.id).then(res => {
    if (res.code == 0) {
      ElMessage.success({ message: res.msg });
    } else {
      ElMessage.error({ message: res.msg });
    }
  });
}

function treeNodeClick(node: AdministrativeDivisionTree) {
  menu_details.value = node;
}
</script>

<style scoped lang="scss">
.box-content {
  height: 95%;

  .tree {
    border-right: 1px var(--el-border-color) solid;
  }
}
</style>
