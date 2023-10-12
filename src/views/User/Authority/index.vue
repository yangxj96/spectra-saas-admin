<template>
  <div style="height: 100%">
    <el-row>
      <el-form :inline="true">
        <el-form-item label="角色名称">
          <el-input placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            <icons name="icon-search" />
            &nbsp;查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>

    <el-divider style="margin: 0" />

    <el-row class="box-content">
      <!-- 字典组树 -->
      <el-col :span="4" class="tree">
        <el-button-group style="padding: 5px">
          <el-button type="primary" link @click="handleCreateRole">&nbsp;新增</el-button>
          <el-button type="primary" link @click="handleModifyRole">&nbsp;编辑</el-button>
        </el-button-group>

        <el-tree
          ref="group_tree"
          :default-expand-all="true"
          :node-key="'id'"
          :data="role_tree"
          :expand-on-click-node="false"
          :highlight-current="true"
          :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 字典项表格 -->
      <el-col :span="10">
        <el-tree
          :data="authority_tree"
          :default-expand-all="true"
          :node-key="'id'"
          :expand-on-click-node="false"
          :highlight-current="true"
          :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 说明 -->
      <el-col :span="10"></el-col>
    </el-row>

    <!-- 角色编辑框 -->
    <el-dialog
      v-model="edit_role.dialog"
      :destroy-on-close="true"
      :append-to-body="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      width="30%"
      class="loading-box">
      <template #header>
        <span>
          <icons name="icon-reset-password" />
          {{ edit_role.title }}
        </span>
      </template>
      <template #footer>
        <slot name="footer">
          <el-button @click="handleCloseRoleEditDialog">关闭</el-button>
          <el-button @click="handleCreatedRole" type="primary">确定</el-button>
        </slot>
      </template>

      <el-form :model="edit_role.obj" :rules="edit_role.rules" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="edit_role.obj.id" disabled placeholder="ID自动生成" />
        </el-form-item>
        <el-form-item label="上级角色">
          <el-tree-select
            v-model="edit_role.obj.pid"
            :data="role_tree"
            node-key="id"
            :check-strictly="true"
            :default-expand-all="true"
            :props="{ children: 'children', label: 'name' }"
            placeholder="请选择上级角色"
            style="width: 100%" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="edit_role.obj.name" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="code" prop="code">
          <el-input v-model="edit_role.obj.code" placeholder="请输入角色code" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="edit_role.obj.description" type="textarea" :rows="5" placeholder="角色" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icons from "@/components/common/Icons.vue";
import RoleApi from "@/api/RoleApi";
import { AuthorityTree, IResult, Role, RoleTree } from "@/types";
import AuthorityApi from "@/api/AuthorityApi";

export default defineComponent({
  name: "UserAuthority",
  components: { Icons },
  data() {
    return {
      edit_role: {
        dialog: false,
        title: "新增角色",
        obj: {} as Role,
        rules: {
          name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
          code: [{ required: true, message: "请输入角色code", trigger: "blur" }]
        }
      },
      role_tree: [] as RoleTree[],
      authority_tree: [] as AuthorityTree[]
    };
  },
  created() {
    this.queryRole();
    this.queryAuthority();
  },
  methods: {
    // 获取角色列表
    queryRole() {
      RoleApi.tree().then((res: IResult<RoleTree[]>) => {
        if (res.code == 0 && res.data) {
          this.role_tree = res.data;
        }
      });
    },
    // 获取权限列表
    queryAuthority() {
      AuthorityApi.tree().then((res: IResult<AuthorityTree[]>) => {
        if (res.code == 0 && res.data) {
          this.authority_tree = res.data;
        }
      });
    },
    // 关闭弹窗
    handleCloseRoleEditDialog() {
      this.edit_role.dialog = false;
    },
    // 处理角色新增
    handleCreateRole() {
      this.edit_role.obj = {} as Role;
      let el: any = this.$refs.group_tree;
      let node = el.getCurrentNode();
      if (node) {
        this.edit_role.obj.pid = node.id;
      }
      this.edit_role.dialog = true;
    },
    // 处理新增角色
    handleCreatedRole() {
      RoleApi.created(this.edit_role.obj).then((res: IResult<Role>) => {
        if (res.code == 0) {
          this.$message.success({
            message: res.msg,
            onClose: () => {
              this.queryRole();
              this.edit_role.dialog = false;
            }
          });
        }
      });
    },
    // 处理角色编辑
    handleModifyRole() {
      this.edit_role.obj = {} as Role;
      let el: any = this.$refs.group_tree;
      let node = el.getCurrentNode();
      if (node) {
        this.edit_role.obj = node;
        this.edit_role.dialog = true;
      } else {
        this.$message.error({
          message: "请先选中一个角色"
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
