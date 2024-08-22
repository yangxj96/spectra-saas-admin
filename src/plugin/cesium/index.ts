import * as Cesium from "cesium";

/**
 * 创建一个地图对象
 * @param boxId 容器ID
 * @param longitude 经度
 * @param latitude 维度
 * @param altitude 海拔
 */
export function create(boxId: string, longitude?: number, latitude?: number, altitude?: number): Cesium.Viewer {
  const viewer = new Cesium.Viewer(boxId, CesiumViewerDefaultConfig);
  if (longitude && latitude && altitude) {
    // 设置默认相机视角
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(longitude, latitude, altitude);
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude),
      // 方向，俯视和仰视的视角
      orientation: {
        //坐标系旋转90度
        heading: Cesium.Math.toRadians(0),
        //设置俯仰角度为-45度
        pitch: Cesium.Math.toRadians(-90),
        roll: 0
      }
    });
  }
  addProviderViewModels(viewer);
  return viewer;
}

function addProviderViewModels(viewer: Cesium.Viewer) {
  const key: string = "63e65af274255379816fa73920a5e51d"; //天地图key，官网申请
  // 加载天地图影像图层
  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url: `http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=${key}`,
      layer: "tdtBasicLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible"
      // 可以限制加载区域
      //rectangle: Cesium.Rectangle.fromDegrees(102.729027, 25.020656, 102.730747, 25.019621)
    })
  );
  // //影像注记
  // viewer.imageryLayers.addImageryProvider(
  //   new Cesium.WebMapTileServiceImageryProvider({
  //     url: `http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=${key}`,
  //     layer: "tdtAnnoLayer",
  //     style: "default",
  //     format: "image/jpeg",
  //     tileMatrixSetID: "GoogleMapsCompatible"
  //   })
  // );
  // //矢量底图
  // viewer.imageryLayers.addImageryProvider(
  //   new Cesium.WebMapTileServiceImageryProvider({
  //     url: `http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${key}`,
  //     layer: "tdtVecBasicLayer",
  //     style: "default",
  //     format: "image/jpeg",
  //     tileMatrixSetID: "GoogleMapsCompatible"
  //   })
  // );
  // //矢量注记
  // viewer.imageryLayers.addImageryProvider(
  //   new Cesium.WebMapTileServiceImageryProvider({
  //     url: `http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=${key}`,
  //     layer: "tdtAnnoLayer",
  //     style: "default",
  //     format: "image/jpeg",
  //     tileMatrixSetID: "GoogleMapsCompatible"
  //   })
  // );
}

export const CesiumViewerDefaultConfig = {
  // 动画小部件
  animation: false,
  // 图层选择器
  baseLayerPicker: false,
  // 全屏按钮
  fullscreenButton: false,
  // vr按钮
  vrButton: false,
  // 搜索按钮
  geocoder: false,
  // home按钮
  homeButton: false,
  // 信息框
  infoBox: false,
  // 场景模拟式
  sceneModePicker: false,
  // 指示选择器
  selectionIndicator: false,
  // 时间线
  timeline: false,
  // 帮助按钮
  navigationHelpButton: false
};
