export default class CommonUtils {
  /**
   * 获取随机数
   * @param min 最小数
   * @param max 最大数
   */
  public static getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * 生成UUID
   * @constructor
   */
  public static UUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
