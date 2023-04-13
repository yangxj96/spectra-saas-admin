<template>
    <div style="height: 94%">
        <el-row style="height: 50px;float: right">
            <el-button link type="primary">
                <IconSearch/>
                导出
            </el-button>
            <el-button link type="primary">
                <IconSearch/>
                保存草稿
            </el-button>
            <el-button link type="primary">
                <IconSearch/>
                保存
            </el-button>
            <el-button link type="primary">
                <IconSearch/>
                保存且发布
            </el-button>
        </el-row>

        <el-row style="width: 100%;height: 100%;border: 1px #4d4d4d solid">
            <el-col :span="20">
                <div id="container" style="height: 100%;"></div>
            </el-col>

            <el-col :span="4" style="border-left: 1px #4d4d4d solid">
                <div id="properties" style="height: 100%;"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="js">
import {defineComponent} from "vue";
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import BpmnModeler from 'bpmn-js/lib/Modeler';

import {BpmnPropertiesPanelModule, BpmnPropertiesProviderModule,} from "bpmn-js-properties-panel";
import IconSearch from "@/components/Icon/IconSearch.vue";
// 样式
// import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
// 汉化
import CustomTranslate from "@/views/Flow/components/Created/utils/CustomTranslate.ts";

export default defineComponent({
    name: "FlowCreated",
    components: {IconSearch},
    data() {
        return {
            modeler: null
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            this.modeler = new BpmnModeler({
                container: '#container',
                // 添加控制板
                propertiesPanel: {
                    parent: "#properties",
                },
                additionalModules: [
                    BpmnPropertiesPanelModule,
                    BpmnPropertiesProviderModule,
                    // 国际化
                    {
                        translate: ['value', CustomTranslate]
                    }
                ]
            });
            await this.modeler.createDiagram()
            this.modeler.get("canvas").zoom('fit-viewport')
        }
    }
})


</script>

<style scoped>

/*.panel {*/
/*    position: absolute;*/
/*    right: 0;*/
/*    margin-top: -900px;*/
/*    width: 320px;*/
/*    height: 720px;*/
/*    overflow: auto;*/
/*}*/


</style>