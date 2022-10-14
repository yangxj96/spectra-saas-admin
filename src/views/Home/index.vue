<template>
    <el-row class="box-content">
        <div ref="echarts-box" class="box-echarts"></div>
    </el-row>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, getCurrentInstance, ComponentInternalInstance, ComponentPublicInstance} from 'vue';
import * as echarts from "echarts";
import UserApi from "@/api/UserApi";

const proxy = (getCurrentInstance() as ComponentInternalInstance).proxy as ComponentPublicInstance;

const option = {
    graphic: {
        elements: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: document.domain,
                    fontSize: 100,
                    fontWeight: 'bold',
                    lineDash: [0, 200],
                    lineDashOffset: 0,
                    fill: 'transparent',
                    stroke: '#000',
                    lineWidth: 1
                },
                keyframeAnimation: {
                    duration: 5000,
                    loop: true,
                    keyframes: [
                        {
                            percent: 0.7,
                            style: {
                                fill: 'transparent',
                                lineDashOffset: 200,
                                lineDash: [200, 0]
                            }
                        },
                        {
                            // Stop for a while.
                            percent: 0.8,
                            style: {
                                fill: 'transparent'
                            }
                        },
                        {
                            percent: 1,
                            style: {
                                fill: 'black'
                            }
                        }
                    ]
                }
            }
        ]
    }
}

let echartsObj: echarts.ECharts | null = null;

onMounted(() => {
    echartsObj = echarts.init(proxy.$refs['echarts-box'] as HTMLElement);
    echartsObj.setOption(option);
})

onUnmounted(() => {
    if (echartsObj != null) {
        echartsObj.dispose();
    }
})

</script>

<style scoped lang="scss">
.box-content {
    width: 100%;
    height: 100%;

    .box-echarts {
        width: 100%;
        height: 100%;
    }
}
</style>

