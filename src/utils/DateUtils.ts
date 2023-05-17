export default class DateUtils {
  private constructor() {}

  static formatting(date: any, fmt: string = "yyyy-MM-dd HH:mm:ss") {
    const dict: any = {
      yyyy: date.getFullYear(),
      M: date.getMonth() + 1,
      d: date.getDate(),
      H: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
      MM: ("" + (date.getMonth() + 101)).substring(1),
      dd: ("" + (date.getDate() + 100)).substring(1),
      HH: ("" + (date.getHours() + 100)).substring(1),
      mm: ("" + (date.getMinutes() + 100)).substring(1),
      ss: ("" + (date.getSeconds() + 100)).substring(1)
    };
    return fmt.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function (substring: string, ...args: any[]) {
      return dict[args[0]];
    });
  }
}
