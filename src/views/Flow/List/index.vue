<template>
  <div style="height: 94%">
    <!-- 查询条件 -->
    <el-row style="height: 50px">
      <el-form :inline="true" :model="condition">
        <el-form-item label="名称">
          <el-input v-model="condition.key" placeholder="请输入名称" :clearable="true" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="condition.value" placeholder="请选择状态" :clearable="true">
            <el-option label="创建" value="创建" />
            <el-option label="载入" value="载入" />
            <el-option label="启用" value="启用" />
            <el-option label="停止" value="停止" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button type="primary">
              <icons name="icon-search" />
              &nbsp;查询
            </el-button>
            <el-button type="primary" @click="$router.push({ path: '/Flow/Created' })">
              <icons name="icon-add" />
              &nbsp;新增流程
            </el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-row>

    <!-- 表格 -->
    <el-row style="height: calc(100% - 100px)">
      <el-table :data="table_data" stripe border height="100%" style="width: 100%">
        <el-table-column label="ID" prop="id" align="center" width="200" />
        <el-table-column label="名称" prop="name" align="center" width="400" :show-overflow-tooltip="true" />
        <el-table-column label="说明" prop="remark" align="center" :show-overflow-tooltip="true" />
        <el-table-column label="状态" align="center" width="100">
          <template #default="datum">
            <el-tag size="small" :type="handleTagTypeTransition(datum.row.status)">{{ datum.row.status_name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="执行次数"
          prop="execute_count"
          width="100"
          align="center"
          :show-overflow-tooltip="true" />
        <el-table-column
          label="完成次数"
          prop="finish_count"
          width="100"
          align="center"
          :show-overflow-tooltip="true" />
        <el-table-column
          label="创建人员"
          prop="created_name"
          width="100"
          align="center"
          :show-overflow-tooltip="true" />
        <el-table-column
          label="创建时间"
          prop="created_datetime"
          width="180"
          align="center"
          :show-overflow-tooltip="true" />
        <el-table-column label="操作" width="210" align="center">
          <template #default="datum">
            <el-button link type="primary" @click="handleShowDetails()">
              <icons name="icon-eye" style="color: #409efc" />
              &nbsp;查看
            </el-button>
            <el-button link type="primary">
              <icons name="icon-edit" style="color: #409efc" />
              &nbsp;编辑
            </el-button>
            <el-button v-if="datum.row.status / 2 < 1" link type="primary">
              <icons name="icon-enable" style="color: #409efc" />
              &nbsp;启用
            </el-button>
            <el-button v-else link type="primary">
              <icons name="icon-disable" style="color: #409efc" />
              &nbsp;停用
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

    <!-- XML预览弹框 -->
    <el-dialog
      v-model="dialog.preview"
      :destroy-on-close="true"
      :append-to-body="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      width="50%">
      <template #header>
        <span>
          <icons name="icon-code" />
          XML预览
        </span>
      </template>

      <el-tabs v-model="dialog.active">
        <el-tab-pane label="XML" name="xml">
          <pre v-highlight style="height: 60vh">
                        <code style="height: 100%">{{ handleXMLFormatting(dialog.xml) }}</code>
                    </pre>
        </el-tab-pane>
        <el-tab-pane label="流程图" name="picture">
          <el-image style="width: 100%; height: 100%" fit="scale-down" :src="dialog.picture" />
        </el-tab-pane>
      </el-tabs>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialog.preview = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Table from "@/mixins/Table";
import vkbeautify from "vkbeautify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { defineComponent } from "vue";
import Icons from "@/components/common/Icons.vue";

export default defineComponent({
  name: "Flow",
  components: { Icons },
  mixins: [Table],
  directives: {
    highlight: el => {
      let blocks = el.querySelectorAll("pre code");
      blocks.forEach((block: any) => {
        hljs.highlightElement(block);
      });
    }
  },
  data() {
    return {
      condition: {
        key: "",
        value: undefined
      },
      options: {
        editor: {
          datum: {}
        }
      },
      dialog: {
        preview: false,
        active: "xml",
        picture: "/src/assets/images/flow-img.png",
        xml:
          '<?xml version="1.0" encoding="UTF-8"?>' +
          '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:flowable="http://flowable.org/bpmn" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="http://www.flowable.org/processdef">' +
          '  <process id="LeaveApplication" name="请假申请" flowable:processCategory="oa">' +
          '    <startEvent id="startNode1" name="开始">' +
          "      <outgoing>Flow_1i6ntl4</outgoing>" +
          "    </startEvent>" +
          '    <sequenceFlow id="Flow_1i6ntl4" sourceRef="startNode1" targetRef="Activity_02v0kq2" />' +
          '    <userTask id="Activity_02v0kq2" name="一级审批" flowable:formKey="Approve:Level1" flowable:assignee="${approverId}">' +
          "      <incoming>Flow_1i6ntl4</incoming>" +
          "      <incoming>Flow_1n4cqa6</incoming>" +
          "      <outgoing>Flow_101x41f</outgoing>" +
          "    </userTask>" +
          '    <exclusiveGateway id="Gateway_1mdfbn1">' +
          "      <incoming>Flow_101x41f</incoming>" +
          "      <outgoing>Flow_1oexhjd</outgoing>" +
          "      <outgoing>Flow_0ms36c0</outgoing>" +
          "    </exclusiveGateway>" +
          '    <sequenceFlow id="Flow_101x41f" sourceRef="Activity_02v0kq2" targetRef="Gateway_1mdfbn1" />' +
          '    <sequenceFlow id="Flow_1oexhjd" sourceRef="Gateway_1mdfbn1" targetRef="Activity_0pbabwd">' +
          "      <conditionExpression xsi:type=\"tFormalExpression\">${status == 'approve'}</conditionExpression>" +
          "    </sequenceFlow>" +
          '    <userTask id="Activity_0pbabwd" name="二级审批" flowable:formKey="Approve:Level2" flowable:candidateUsers="zhangsan,lisi">' +
          "      <incoming>Flow_1oexhjd</incoming>" +
          "      <outgoing>Flow_0oidzit</outgoing>" +
          "    </userTask>" +
          '    <exclusiveGateway id="Gateway_01lgsw5">' +
          "      <incoming>Flow_0oidzit</incoming>" +
          "      <outgoing>Flow_1mqv4d2</outgoing>" +
          "      <outgoing>Flow_0ubisbp</outgoing>" +
          "    </exclusiveGateway>" +
          '    <sequenceFlow id="Flow_0oidzit" sourceRef="Activity_0pbabwd" targetRef="Gateway_01lgsw5" />' +
          '    <endEvent id="Event_1mqklz0" name="结束">' +
          "      <incoming>Flow_1mqv4d2</incoming>" +
          "    </endEvent>" +
          '    <sequenceFlow id="Flow_1mqv4d2" sourceRef="Gateway_01lgsw5" targetRef="Event_1mqklz0">' +
          "      <conditionExpression xsi:type=\"tFormalExpression\">${status == 'approve'}</conditionExpression>" +
          "    </sequenceFlow>" +
          '    <userTask id="Activity_15gykiz" name="修改填报">' +
          "      <incoming>Flow_0ms36c0</incoming>" +
          "      <incoming>Flow_0ubisbp</incoming>" +
          "      <outgoing>Flow_1n4cqa6</outgoing>" +
          "    </userTask>" +
          '    <sequenceFlow id="Flow_0ms36c0" sourceRef="Gateway_1mdfbn1" targetRef="Activity_15gykiz">' +
          "      <conditionExpression xsi:type=\"tFormalExpression\">${status == 'reject'}</conditionExpression>" +
          "    </sequenceFlow>" +
          '    <sequenceFlow id="Flow_0ubisbp" sourceRef="Gateway_01lgsw5" targetRef="Activity_15gykiz">' +
          "      <conditionExpression xsi:type=\"tFormalExpression\">${status == 'reject'}</conditionExpression>" +
          "    </sequenceFlow>" +
          '    <sequenceFlow id="Flow_1n4cqa6" sourceRef="Activity_15gykiz" targetRef="Activity_02v0kq2" />' +
          "  </process>" +
          '  <bpmndi:BPMNDiagram id="BPMNDiagram_flow">' +
          '    <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="LeaveApplication">' +
          '      <bpmndi:BPMNEdge id="Flow_1n4cqa6_di" bpmnElement="Flow_1n4cqa6">' +
          '        <di:waypoint x="490" y="440" />' +
          '        <di:waypoint x="370" y="440" />' +
          '        <di:waypoint x="370" y="255" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_0ubisbp_di" bpmnElement="Flow_0ubisbp">' +
          '        <di:waypoint x="880" y="240" />' +
          '        <di:waypoint x="880" y="440" />' +
          '        <di:waypoint x="590" y="440" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_0ms36c0_di" bpmnElement="Flow_0ms36c0">' +
          '        <di:waypoint x="540" y="240" />' +
          '        <di:waypoint x="540" y="400" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_1mqv4d2_di" bpmnElement="Flow_1mqv4d2">' +
          '        <di:waypoint x="905" y="215" />' +
          '        <di:waypoint x="1002" y="215" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_0oidzit_di" bpmnElement="Flow_0oidzit">' +
          '        <di:waypoint x="760" y="215" />' +
          '        <di:waypoint x="855" y="215" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_1oexhjd_di" bpmnElement="Flow_1oexhjd">' +
          '        <di:waypoint x="565" y="215" />' +
          '        <di:waypoint x="660" y="215" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_101x41f_di" bpmnElement="Flow_101x41f">' +
          '        <di:waypoint x="420" y="215" />' +
          '        <di:waypoint x="515" y="215" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNEdge id="Flow_1i6ntl4_di" bpmnElement="Flow_1i6ntl4">' +
          '        <di:waypoint x="225" y="215" />' +
          '        <di:waypoint x="320" y="215" />' +
          "      </bpmndi:BPMNEdge>" +
          '      <bpmndi:BPMNShape id="BPMNShape_startNode1" bpmnElement="startNode1" bioc:stroke="">' +
          '        <omgdc:Bounds x="195" y="200" width="30" height="30" />' +
          "        <bpmndi:BPMNLabel>" +
          '          <omgdc:Bounds x="197" y="237" width="23" height="14" />' +
          "        </bpmndi:BPMNLabel>" +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Activity_0wi8psg_di" bpmnElement="Activity_02v0kq2">' +
          '        <omgdc:Bounds x="320" y="175" width="100" height="80" />' +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Gateway_1mdfbn1_di" bpmnElement="Gateway_1mdfbn1" isMarkerVisible="true">' +
          '        <omgdc:Bounds x="515" y="190" width="50" height="50" />' +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Activity_17nhy2b_di" bpmnElement="Activity_0pbabwd">' +
          '        <omgdc:Bounds x="660" y="175" width="100" height="80" />' +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Gateway_01lgsw5_di" bpmnElement="Gateway_01lgsw5" isMarkerVisible="true">' +
          '        <omgdc:Bounds x="855" y="190" width="50" height="50" />' +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Event_1mqklz0_di" bpmnElement="Event_1mqklz0">' +
          '        <omgdc:Bounds x="1002" y="197" width="36" height="36" />' +
          "        <bpmndi:BPMNLabel>" +
          '          <omgdc:Bounds x="1009" y="240" width="23" height="14" />' +
          "        </bpmndi:BPMNLabel>" +
          "      </bpmndi:BPMNShape>" +
          '      <bpmndi:BPMNShape id="Activity_183ksl7_di" bpmnElement="Activity_15gykiz">' +
          '        <omgdc:Bounds x="490" y="400" width="100" height="80" />' +
          "      </bpmndi:BPMNShape>" +
          "    </bpmndi:BPMNPlane>" +
          "  </bpmndi:BPMNDiagram>" +
          "</definitions>"
      }
    };
  },
  created() {
    this.table_data = [
      {
        id: "1628283509519011841",
        name: "流程名称",
        remark: "流程说明",
        status: 0,
        status_name: "创建",
        execute_count: 1,
        finish_count: 1,
        created_name: "管理员",
        created_datetime: "2023-04-12 22:43:00"
      },
      {
        id: "1628283509519011841",
        name: "流程名称",
        remark: "流程说明",
        status: 1,
        execute_count: 1,
        finish_count: 1,
        status_name: "载入",
        created_name: "管理员",
        created_datetime: "2023-04-12 22:43:00"
      },
      {
        id: "1628283509519011841",
        name: "流程名称",
        remark: "流程说明",
        status: 2,
        execute_count: 1,
        finish_count: 1,
        status_name: "启用",
        created_name: "管理员",
        created_datetime: "2023-04-12 22:43:00"
      },
      {
        id: "1628283509519011841",
        name: "流程名称",
        remark: "流程说明",
        status: 3,
        execute_count: 1,
        finish_count: 1,
        status_name: "停止",
        created_name: "管理员",
        created_datetime: "2023-04-12 22:43:00"
      }
    ];
  },
  methods: {
    // 翻译tag类型
    handleTagTypeTransition(type: number) {
      switch (type) {
        case 0:
          return "info";
        case 1:
          return "warning";
        case 2:
          return "success";
        case 3:
          return "danger";
        default:
          return "";
      }
    },
    // 格式化XML文本
    handleXMLFormatting(content: string) {
      return vkbeautify.xml(content, 50);
    },
    // 显示流程的XML和流程图
    handleShowDetails() {
      this.dialog.preview = true;
    }
  }
});
</script>

<style scoped lang="scss">
:deep(.el-dialog) {
  overflow: auto;
}

:deep(.el-dialog__header) {
  padding-bottom: 0;
}

:deep(.el-dialog__body) {
  height: 60vh;
  padding-bottom: 40px;
}

:deep(.el-tabs__content),
:deep(.el-tab-pane),
:deep(.el-tabs) {
  width: 100%;
  height: 100%;
}

:deep(.el-tabs__header) {
  margin-bottom: 0;
}
</style>
