<template>
  <el-row class="box-content">
    <div ref="echarts-box" class="box-echarts"></div>
  </el-row>
</template>

<script lang="ts">
import { type ECharts, init } from "echarts";

export default defineComponent({
  name: "Home",
  data() {
    return {
      chart: {
        obj: {} as ECharts,
        options: {
          graphic: {
            elements: [
              {
                type: "text",
                left: "center",
                top: "center",
                style: {
                  text: document.domain,
                  fontSize: 100,
                  fontWeight: "bold",
                  lineDash: [0, 200],
                  lineDashOffset: 0,
                  fill: "transparent",
                  stroke: "#000",
                  lineWidth: 1
                },
                keyframeAnimation: {
                  duration: 5000,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.7,
                      style: {
                        fill: "transparent",
                        lineDashOffset: 200,
                        lineDash: [200, 0]
                      }
                    },
                    {
                      // Stop for a while.
                      percent: 0.8,
                      style: {
                        fill: "transparent"
                      }
                    },
                    {
                      percent: 1,
                      style: {
                        fill: "black"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    };
  },
  mounted() {
    this.chart.obj = init(this.$refs["echarts-box"] as HTMLDivElement);
    this.chart.obj.setOption(this.chart.options);
  },
  unmounted() {
    this.chart.obj.dispose();
  }
});
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
