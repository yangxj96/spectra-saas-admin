export default class DateUtils {

    private constructor() {
    }

    static formatting(date: Date, fmt: string = 'yyyy-MM-dd HH:mm:ss') {
        const dict: any = {
            yyyy: date.getFullYear(),
            M: date.getMonth() + 1,
            d: date.getDate(),
            H: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            MM: ('' + (date.getMonth()   + 101)).substring(1),
            dd: ('' + (date.getDate()    + 100)).substring(1),
            HH: ('' + (date.getHours()   + 100)).substring(1),
            mm: ('' + (date.getMinutes() + 100)).substring(1),
            ss: ('' + (date.getSeconds() + 100)).substring(1),
        };
        return fmt.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function () {
            return dict[arguments[0]];
        });
    }

}
