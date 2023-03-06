<template>
    <el-row class="box-content">
        <div ref="echarts-box" class="box-echarts"></div>
    </el-row>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, getCurrentInstance, ComponentInternalInstance, ComponentPublicInstance} from 'vue';
import * as echarts from "echarts";
import {Client} from '@stomp/stompjs'

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

// let ws: Socket | null = null

onMounted(() => {
    console.log(`开始连接`)
    let client = new Client({
        brokerURL: 'ws://192.168.2.183:15674/ws',
        connectHeaders: {
            login: 'root',
            passcode: 'QPOCe^7Q5qtoPD&O'
        },
        onConnect: frame => {
            console.log(`连接成功`, frame)
            client.subscribe("/queue/rpp.location.report", message => {
                console.log(`消息:`, message)
                console.log(`消息:`, JSON.parse(message.body))
            })
        },
        onDisconnect: frame => {
            console.log(`连接断开:`, frame)
        },
        onStompError: frame => {
            console.log(`连接错误:`, frame)
        }
    })
    // 开启连接
    client.activate()

    // ws = new Socket('ws://192.168.2.29:8080/location/relay', {
    //     handleMessage(e: string) {
    //         console.log(`外部定义的处理方式,消息是:${e}`)
    //     }
    // })

    echartsObj = echarts.init(proxy.$refs['echarts-box'] as HTMLElement);
    echartsObj.setOption(option);
})

onUnmounted(() => {
    if (echartsObj != null) {
        echartsObj.dispose();
    }
    // if (ws != null) {
    //     ws?.destroy()
    // }
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

