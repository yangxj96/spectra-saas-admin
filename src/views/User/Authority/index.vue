<template>
  <div style="height: 100%">
    <!-- 搜索框附件 -->
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
    <!-- 分割线 -->
    <el-divider style="margin: 0" />
    <!-- 内容框 -->
    <el-row class="box-content">
      <!-- 角色树 -->
      <el-col :span="4" class="tree">
        <el-button-group style="padding: 5px">
          <el-button type="primary" link @click="handleShowRoleDialog">&nbsp;新增</el-button>
          <el-button type="primary" link @click="handleModifyRole">&nbsp;编辑</el-button>
        </el-button-group>

        <el-tree
          ref="el_role_tree"
          :default-expand-all="true"
          :node-key="'id'"
          :data="role_tree"
          :expand-on-click-node="false"
          :highlight-current="true"
          @node-click="handleRoleTreeItemClick"
          :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 权限树 -->
      <el-col :span="10">
        <el-button-group style="padding: 5px">
          <el-button type="primary" link @click="handleShowAuthorityDialog">&nbsp;新增</el-button>
          <el-button type="primary" link @click="handleModifyAuthority">&nbsp;编辑</el-button>
        </el-button-group>

        <el-tree
          ref="el_authority_tree"
          :data="authority_tree"
          :default-expand-all="true"
          :default-checked-keys="authority_check"
          :node-key="'id'"
          :expand-on-click-node="false"
          :highlight-current="true"
          :show-checkbox="true"
          :props="{ children: 'children', label: 'name' }" />
      </el-col>
      <!-- 说明 -->
      <el-col :span="10"></el-col>
    </el-row>

    <!-- 权限编辑框 -->
    <el-dialog
      v-model="edit_authority.dialog"
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
          {{ edit_authority.title }}
        </span>
      </template>
      <template #footer>
        <slot name="footer">
          <el-button
            @click="
              () => {
                this.edit_authority.dialog = false;
              }
            ">
            关闭
          </el-button>
          <el-button @click="handleCreatedAuthority" type="primary">确定</el-button>
        </slot>
      </template>

      <el-form :model="edit_authority.obj" :rules="edit_authority.rules" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="edit_authority.obj.id" disabled placeholder="ID自动生成" />
        </el-form-item>
        <el-form-item label="上级权限">
          <el-tree-select
            v-model="edit_authority.obj.pid"
            :data="authority_tree"
            node-key="id"
            :check-strictly="true"
            :default-expand-all="true"
            :props="{ children: 'children', label: 'name' }"
            placeholder="请选择上级权限"
            style="width: 100%" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="edit_authority.obj.name" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="code" prop="code">
          <el-input v-model="edit_authority.obj.code" placeholder="请输入角色code" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="edit_authority.obj.description" type="textarea" :rows="5" placeholder="权限说明" />
        </el-form-item>
      </el-form>
    </el-dialog>

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
          <el-button
            @click="
              () => {
                this.edit_role.dialog = false;
              }
            ">
            关闭
          </el-button>
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
          <el-input v-model="edit_role.obj.description" type="textarea" :rows="5" placeholder="角色说明" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icons from "@/components/common/Icons.vue";
import RoleApi from "@/api/RoleApi";
import { Authority, AuthorityTree, IResult, Role, RoleTree } from "@/types";
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
      edit_authority: {
        dialog: false,
        title: "新增权限",
        obj: {} as Role,
        rules: {
          name: [{ required: true, message: "请输入权限名称", trigger: "blur" }],
          code: [{ required: true, message: "请输入权限code", trigger: "blur" }]
        }
      },
      role_tree: [] as RoleTree[],
      authority_tree: [] as AuthorityTree[],
      authority_check: ["1712741546826620930"] as string[]
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
    // 处理角色新增框显示
    handleShowRoleDialog() {
      this.edit_role.obj = {} as Role;
      let el: any = this.$refs.el_role_tree;
      let node = el.getCurrentNode();
      if (node) {
        this.edit_role.obj.pid = node.id;
      }
      this.edit_role.dialog = true;
    },
    // 处理权限新增
    handleShowAuthorityDialog() {
      this.edit_authority.obj = {} as Authority;
      let el: any = this.$refs.el_authority_tree;
      let node = el.getCurrentNode();
      if (node) {
        this.edit_authority.obj.pid = node.id;
      }
      this.edit_authority.dialog = true;
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
      let el: any = this.$refs.el_role_tree;
      let node = el.getCurrentNode();
      if (!node) {
        this.$message.error({
          message: "请先选中一个角色"
        });
        return;
      }
      if (node.pid == 0) {
        node.pid = undefined;
      }
      this.edit_role.title = "编辑角色";
      this.edit_role.obj = node;
      this.edit_role.dialog = true;
    },
    // 处理Role树点击事件
    handleRoleTreeItemClick(obj: Role) {
      RoleApi.ownerAuthority(obj.id!).then(res => {
        console.log(res);
      });
    },
    // 处理新增角色
    handleCreatedAuthority() {
      AuthorityApi.created(this.edit_authority.obj).then((res: IResult<Role>) => {
        if (res.code == 0) {
          this.$message.success({
            message: res.msg,
            onClose: () => {
              this.queryAuthority();
              this.edit_authority.dialog = false;
            }
          });
        }
      });
    },
    // 处理角色编辑
    handleModifyAuthority() {
      this.edit_authority.obj = {} as Authority;
      let el: any = this.$refs.el_authority_tree;
      let node = el.getCurrentNode();
      if (!node) {
        this.$message.error({
          message: "请先选中一个权限"
        });
        return;
      }
      if (node.pid == 0) {
        node.pid = undefined;
      }
      this.edit_authority.title = "编辑权限";
      this.edit_authority.obj = node;
      this.edit_authority.dialog = true;
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
