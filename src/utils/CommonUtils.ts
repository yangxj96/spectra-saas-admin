export default class CommonUtils {

    /**
     * 获取随机数
     * @param min 最小数
     * @param max 最大数
     */
    public static getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
