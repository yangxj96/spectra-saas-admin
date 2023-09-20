<template>
  <div style="height: 100%">
    <el-row>
      <el-form :inline="true">
        <el-form-item label="角色名称">
          <el-input placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">
              <icons name="icon-search" />
              &nbsp;查询
            </el-button>
            <el-button type="primary" @click="handleCreateRole">
              <icons name="icon-add" />
              &nbsp;新增角色
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>

    <el-divider style="margin: 0" />

    <el-row class="box-content">
      <!-- 字典组树 -->
      <el-col :span="4" class="tree">
        <el-tree ref="group_tree" :default-expand-all="true" :data="tree_data" :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 字典项表格 -->
      <el-col :span="10">
        <el-tree :data="authority_data" :default-expand-all="true" show-checkbox :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 说明 -->
      <el-col :span="10"></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { type RoleTree } from "@/model/Role";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserAuthority",
  data() {
    const authority_data: TreeData[] = [
      {
        name: "人员管理",
        children: [{ name: "新增" }, { name: "修改" }, { name: "删除" }, { name: "查询" }]
      },
      {
        name: "组织机构管理",
        children: [{ name: "新增" }, { name: "修改" }, { name: "删除" }, { name: "查询" }]
      },
      {
        name: "菜单管理",
        children: [{ name: "新增" }, { name: "修改" }, { name: "删除" }, { name: "查询" }]
      }
    ];
    return {
      tree_data: [] as RoleTree[],
      authority_data: authority_data
    };
  },
  created() {
    this.getRole();
  },
  methods: {
    // 获取角色列表
    getRole() {
      this.tree_data = [
        {
          id: "123",
          name: "运维管理员1",
          description: "说明",
          children: [
            {
              id: "123",
              name: "运维管理员4",
              description: "说明"
            },
            {
              id: "123",
              name: "运维管理员5",
              description: "说明"
            }
          ]
        },
        {
          id: "123",
          name: "运维管理员2",
          description: "说明"
        },
        {
          id: "123",
          name: "运维管理员3",
          description: "说明"
        }
      ];
    },
    // 处理角色新增
    handleCreateRole() {
      let el: any = this.$refs.group_tree;
      let node = el.getCurrentNode();
      if (node) {
        this.$confirm(`是否新建在[${node.name}]的下级`, "", {
          cancelButtonText: "否",
          confirmButtonText: "是"
        });
      }
    }
  }
});

// 树结构
interface TreeData {
  name: string;
  children?: TreeData[];
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
