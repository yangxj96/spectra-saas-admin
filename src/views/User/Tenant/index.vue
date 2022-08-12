<template>
    <el-row style="height: 100%;width: 100%">
        <div ref="echartsBox" style="height: 100%;width: 100%"></div>
    </el-row>
</template>

<script lang="ts">

import {Vue, Options, Ref} from "vue-property-decorator";
import * as echarts from "echarts";

@Options({})
export default class Tenant extends Vue {

    @Ref()
    readonly echartsBox!: HTMLDivElement;

    private names = [
        '丽江段',
        '大理段',
        '楚雄段',
        '昆明段',
        '玉溪段',
        '红河段',
    ];

    private resData = [
        {
            name: '丽江段',
            total: 50,
            progress: 15,
        },
        {
            name: '大理段',
            total: 48,
            progress: 30,
        },
        {
            name: '楚雄段',
            total: 48,
            progress: 45,
        },
        {
            name: '昆明段',
            total: 33,
            progress: 5,
        },
        {
            name: '玉溪段',
            total: 28,
            progress: 10,
        },
        {
            name: '红河段',
            total: 50,
            progress: 40,
        },
    ];

    public mounted() {
        this.echartsObj = echarts.init(this.echartsBox);
        let option = {
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#7ee3fc',
                },
                data: this.names
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: '#68a5d7',
                },
            },
            series: [
                // 上半截柱子
                {
                    name: '2019',
                    type: 'bar',
                    barWidth: '30',
                    barGap: '-100%',
                    z: 0,
                    itemStyle: {
                        //lenged文本
                        opacity: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                            [
                                {
                                    offset: 0,
                                    color: '#fbae9d', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#ff7979', // 100% 处的颜色
                                },
                            ],
                            false
                        )
                    },
                    data: this.resData.map((item) => {
                        return item.total + item.progress;
                    }),
                },
                // 最顶部圆片
                {
                    name: '',
                    type: 'pictorialBar',
                    symbolSize: [30, 10],
                    symbolOffset: [0, -5],
                    z: 3,
                    symbolPosition: 'end',
                    itemStyle: {
                        color: '#ff7e7e',
                        opacity: 1,
                    },
                    data: this.resData.map((item) => {
                        return item.total + item.progress;
                    }),
                },
                //数据柱子 (蓝色柱子)
                {
                    name: '2020',
                    type: 'bar',
                    barWidth: 30,
                    barGap: '-100%',
                    itemStyle: {
                        //lenged文本
                        opacity: 1,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                            [
                                {
                                    offset: 0,
                                    color: '#1dd3e5', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#1969b3', // 100% 处的颜色
                                },
                            ],
                            false
                        )
                    },
                    data: this.resData.map((item) => {
                        return item.progress;
                    }),
                },
                //数据圆片(蓝色柱子的顶部圆片)
                {
                    name: '',
                    type: 'pictorialBar',
                    symbolSize: [30, -10],
                    symbolOffset: [0, 0],
                    z: 3,
                    itemStyle: {
                        opacity: 1,
                        color: 'rgb(27, 140, 255)'
                    },
                    symbolPosition: 'end',
                    data: this.resData.map((item) => {
                        return item.progress;
                    }),
                },
            ],
        };
        this.echartsObj.setOption(option)
    }

}

</script>

<style scoped>

</style>
