<template>
    <el-row class="box-content">
        <div ref="echartsBox" class="box-echarts"></div>
    </el-row>
</template>

<script lang="ts">
import {Vue, Options, Ref} from "vue-property-decorator";
import * as echarts from 'echarts'

@Options({})
export default class Home extends Vue {

    @Ref()
    readonly echartsBox!: HTMLDivElement;

    private echartsObj: any;

    public mounted() {
        console.log('ref:', this.echartsBox);
        this.echartsObj = echarts.init(this.echartsBox);
        let option = {
            graphic: {
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: 'IT十万  IT100000.com',
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
        };
        this.echartsObj.setOption(option)
    }

    public click() {
        console.log(this.echartsBox)
    }

}
</script>

<style scoped lang="scss">
.box-content {
    width: 100%;
    height: 100%;

    .box-echarts{
        width: 100%;
        height: 100%;
    }
}
</style>

