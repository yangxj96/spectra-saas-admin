<template>
  <div class="box-content" id="cesiumContainer"></div>
</template>

<script lang="ts" setup>
import * as Cesium from "cesium";
import * as CesiumHelper from "@/plugin/cesium";
import { onMounted } from "vue";

let viewer: Cesium.Viewer | null = null;

/**
 * 初始化地图
 */
function initMap() {
  viewer = CesiumHelper.create("cesiumContainer", 102.727558, 25.021974, 3000);
  // 监听地图缩放等级
  viewer.scene.camera.moveEnd.addEventListener(() => {
    let magnitude = viewer?.camera.getMagnitude();
    console.log(`当前缩放等级:${magnitude}`);
  });
}

onMounted(() => {
  initMap();
});
</script>

<style scoped lang="scss">
// cesium样式表
@import "cesium/Build/Cesium/Widgets/widgets.css";

.box-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
