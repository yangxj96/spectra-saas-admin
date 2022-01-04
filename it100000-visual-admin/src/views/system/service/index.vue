<template>
    <div id="canvas" class="canvas" ref="canvas"></div>
    <div id="attrs-panel" class="attrs-panel" ref="attrs-panel"></div>
</template>

<script>

import BpmnJS from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
// 一个描述的json
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
// 国际化插件
import translate from '@/plugin/bpmnjs/translate';

const CustomTranslate = {
    translate: ['value', translate]
}

export default {
    name: "index",
    data() {
        return {
            diagramXML: null,

        };
    },
    mounted() {
        this.bpmnModeler = new BpmnJS({
            container: document.getElementById('canvas'),
            propertiesPanel: {
                parent: "#attrs-panel"
            },
            additionalModules: [
                CustomTranslate,
                propertiesPanelModule,
                propertiesProviderModule,
            ],
            moddleExtensions: {
                //如果要在属性面板中维护camunda：XXX属性，则需要此
                camunda: camundaModdleDescriptor
            }
        });

        this.bpmnModeler.createDiagram();

        // fetch(`${process.env.BASE_URL}diagram.bpmn`).then(async res => {
        //     return res.text()
        // }).then(async res => {
        //     try {
        //         const result = await this.bpmnModeler.importXML(res);
        //         const {warnings} = result;
        //         console.log(warnings);
        //     } catch (err) {
        //         console.log(err.message, err.warnings);
        //     }
        // })
    },
    beforeDestroy() {
        if (this.bpmnModeler != null) {
            this.bpmnModeler.destroy();
        }
    }

}
</script>

<style scoped lang="scss">
@import '~bpmn-js/dist/assets/diagram-js.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
//右边工具栏样式
@import "~bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";

.canvas {
    height: 100%;
    width: 80%;
    float: left;
}

.attrs-panel {
    height: 100%;
    width: 20%;
    float: right;
    overflow-y: auto;
    -ms-overflow-y: auto;
}

:deep(.bpp-properties-panel [type=text]) {
    padding-right: 0;
}

:deep(.bpp-properties-panel) {
    background-color: #FFF;
}
</style>
