<template>
  <div class="box-content" id="cesiumContainer"></div>
</template>

<script lang="ts" setup>
import * as Cesium from "cesium";
import { CesiumViewerDefaultConfig } from "@/plugin/cesium";
import { onMounted } from "vue";

let viewer: Cesium.Viewer | null = null;

/**
 * 初始化地图
 */
function initMap() {
  viewer = new Cesium.Viewer("cesiumContainer", CesiumViewerDefaultConfig);
  // 监听地图缩放等级
  viewer.scene.camera.moveEnd.addEventListener(() => {
    let magnitude = viewer?.camera.getMagnitude();
    console.log(`当前缩放等级:${magnitude}`);
  });
  // 初始视角
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(112, 10, 7000000.0),
    orientation: {
      // 指向
      heading: Cesium.Math.toRadians(-10),
      // 视角
      pitch: Cesium.Math.toRadians(-70),
      roll: 0.0
    }
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
