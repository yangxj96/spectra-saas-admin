<template>
  <div style="height: 100%">
    <el-dialog
      :model-value="true"
      destroy-on-close
      @close="onCancel"
      :title="`编辑[${options.datum.key}]`"
      width="25%"
      class="loading-box">
      <el-form ref="ruleForm" :model="options.datum" :rules="form.rules" label-width="70px">
        <el-form-item label="id">
          <el-input v-model="options.datum.id" disabled />
        </el-form-item>
        <el-form-item label="配置键">
          <el-input v-model="options.datum.key" disabled />
        </el-form-item>
        <el-form-item label="配置值" prop="value" v-if="options.datum.type === 1">
          <el-input v-model="options.datum.value" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" />
        </el-form-item>
        <el-form-item label="配置值" prop="value" v-else-if="options.datum.type === 2">
          <el-select v-model="options.datum.value" placeholder="请选择值" style="width: 100%">
            <el-option
              v-for="item in options.datum.items"
              :key="item.value"
              :label="item.name"
              :value="item.value.toString()" />
          </el-select>
        </el-form-item>
        <el-form-item label="配置值" prop="value" v-else-if="options.datum.type === 3">
          <el-select v-model="options.datum.value" placeholder="请选择值" :multiple="true" style="width: 100%">
            <el-option
              v-for="item in options.datum.items"
              :key="item.value"
              :label="item.name"
              :value="item.value.toString()" />
          </el-select>
        </el-form-item>
        <el-form-item label="说明">
          <el-input v-model="options.datum.remark" :autosize="{ minRows: 6, maxRows: 12 }" type="textarea" />
        </el-form-item>
      </el-form>

      <template #footer>
        <slot name="footer">
          <el-button type="primary" @click="onSave">确定</el-button>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { type FormInstance, type FormRules } from "element-plus";
import { defineComponent } from "vue";
import { MessageDefaultConfig } from "@/utils/DefaultConfig";
import type { SystemConfig } from "@/types";

export default defineComponent({
  name: "SystemConfigRoutineEditor",
  props: {
    datum: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        datum: {} as SystemConfig
      },
      form: {
        obj: {} as SystemConfig,
        rules: {
          value: [{ required: true, message: "请输入或选择值", trigger: "blur" }]
        } as FormRules
      }
    };
  },
  methods: {
    onCancel() {
      this.$emit("close", false);
    },
    async onSave() {
      await (this.$refs.ruleForm as FormInstance).validate(valid => {
        if (valid) {
          this.$message.success({
            ...MessageDefaultConfig,
            type: "success",
            onClose: () => {
              this.onCancel();
            }
          });
        }
      });
    },
    formatParams() {
      this.form.obj = { ...this.options.datum };
      if (this.form.obj.type === 3) {
        let v = "";
        for (let item of this.form.obj.value) {
          v += item + ",";
        }
        v = v.substring(0, v.length - 1);
        this.form.obj.value = v;
      }
      return this.form.obj;
    }
  },
  watch: {
    datum: {
      handler(nv) {
        this.options.datum = nv;
        if (this.options.datum.type === 3) {
          this.options.datum.value = this.options.datum.value.split(",");
        }
      },
      immediate: true
    }
  }
});
</script>
