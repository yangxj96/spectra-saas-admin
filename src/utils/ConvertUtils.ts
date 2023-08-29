export default class ConvertUtils {
  /**
   * 文件上传
   * @param json json对象
   */
  static json2FormData(json: object) {
    const data = new FormData();
    Object.keys(json).forEach(key => {
      console.log(key);
      data.append(key, data[key]);
    });
    return data;
  }
}
