<template>
  <div style="height: 100%">
    <el-row class="box-content">
      <!-- 菜单树 -->
      <el-col :span="6" class="tree">
        <el-tree
          ref="tree"
          highlight-current
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
import { ref } from "vue";
import AdministrativeDivisionApi from "@/api/AdministrativeDivisionApi";
import { type ElTree } from "element-plus";

const tree = ref<InstanceType<typeof ElTree>>();

const menu_details = ref<AdministrativeDivision>({
  id: "",
  name: "",
  pid: "",
  level: ""
});

let tree_data = ref<AdministrativeDivisionTree[]>();

try {
  const response = await AdministrativeDivisionApi.tree();
  tree_data.value = response.data.data.records;
} catch (error) {
  console.error("Failed to fetch data:", error);
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
