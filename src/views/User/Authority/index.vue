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

    <el-dialog v-model="edit_role.dialog" :destroy-on-close="true" :append-to-body="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" width="30%">
      <template #header>
        <span>
          <icons name="icon-reset-password" />
          {{ edit_role.title }}
        </span>
      </template>
      <template #footer>
        <slot name="footer">
          <el-button>关闭</el-button>
          <el-button type="primary">确定</el-button>
        </slot>
      </template>

      <el-form :model="edit_role.obj" label-width="80px">
        <el-form-item label="角色ID">
          <el-input v-model="edit_role.obj.id" disabled placeholder="自动生成" />
        </el-form-item>
        <el-form-item label="上级角色">
          <el-select v-model="edit_role.obj.pid" placeholder="请选择上级角色" style="width: 100%">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="角色名称" placeholder="请输入角色名称">
          <el-input v-model="edit_role.obj.name" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icons from "@/components/common/Icons.vue";
import RoleApi from "@/api/RoleApi";
import { IResult, Role, RoleTree } from "@/types";

export default defineComponent({
  name: "UserAuthority",
  components: { Icons },
  data() {
    return {
      edit_role: {
        dialog: true,
        title: "新增角色",
        obj: {} as Role
      },
      tree_data: [] as RoleTree[],
      authority_data: []
    };
  },
  created() {
    this.queryRole();
  },
  methods: {
    // 获取角色列表
    queryRole() {
      RoleApi.tree().then((res: IResult<RoleTree[]>) => {
        console.log(res);
        if (res.code == 0 && res.data) {
          this.tree_data = res.data;
        }
      });
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
</script>

<style scoped lang="scss">
.box-content {
  height: 95%;

  .tree {
    border-right: 1px var(--el-border-color) solid;
  }
}
</style>
