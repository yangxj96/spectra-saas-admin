export interface IOptions {
    /** 心跳时间 */
    heart_time?: number;
    /** 心跳消息 */
    heart_msg?: any;
    /** 检查连接时间 */
    check_time?: number;
    /** 断线重连时间 */
    lock_time?: number;
    /** 接受到消息 */
    handleMessage?: Function | null;
}

export default class Socket {

    private LOG_PREFIX: string = '[websocket]';

    private readonly url: string;

    private ws: WebSocket | null = null;

    private options: IOptions = {
        heart_time: 3000,
        heart_msg: '',
        check_time: 3000,
        lock_time: 3000
    };

    private intervalId?: NodeJS.Timer;

    constructor(url: string, options?: IOptions) {
        if (url === undefined || url === null || url === '') {
            throw new Error(`${this.LOG_PREFIX} 地址不能为空`);
        }
        this.url = url;
        // 如果有配置则合并配置
        if (options) {
            // Object.assign(this.options, options);
            (<any>Object).assign(this.options, options);
        }
        // 初始化
        this.init();
    }

    /**
     * 发送消息
     * @param msg 消息
     */
    public send(msg: string) {
        if (this.ws == null) {
            console.debug(`${this.LOG_PREFIX} 发送消息失败,ws对象为null`);
            return;
        }
        if (this.ws?.readyState !== 1) {
            console.debug(`${this.LOG_PREFIX} ws未准备好`);
            return;
        }
        this.ws.send(msg);
        console.debug(`${this.LOG_PREFIX} 发送消息成功`);
    }

    /**
     * 销毁当前实例
     */
    public destroy(){
        if (this.ws !== null){
            this.ws.close();
        }
        console.debug(`${this.LOG_PREFIX} 实例销毁`);
    }

    private init(): void {
        if (!('WebSocket' in window)) {
            console.error("当前浏览器不支持websocket");
            return;
        }
        // @formatter:off
        this.ws = new WebSocket(this.url);
        this.ws.onopen    = e => this.onOpen(e);
        this.ws.onclose   = e => this.onClose(e);
        this.ws.onerror   = e => this.onError(e);
        this.ws.onmessage = e => this.onMessage(e);
        // @formatter:on
    }

    /**
     * 打开事件
     * @param e {@link Event}
     * @private
     */
    private onOpen(e: Event): void {
        console.debug(`${this.LOG_PREFIX} event-open:${e}`);
        // 启动心跳
        console.debug(`${this.LOG_PREFIX} 启动心跳`);
        this.heartCheck();
    }

    /**
     * 关闭事件
     * @param e {@link CloseEvent}
     * @private
     */
    private onClose(e: CloseEvent): void {
        console.debug(`${this.LOG_PREFIX} event-close:${e}`);
        console.debug(`${this.LOG_PREFIX} 关闭心跳 `);
        if (this.intervalId != null) {
            clearInterval(this.intervalId);
        }
    }

    /**
     * 连接发生错误
     * @param e {@link Event}
     * @private
     */
    private onError(e: Event): void {
        console.debug(`${this.LOG_PREFIX} event-error:${e}`);
        if (this.ws != null) {
            this.ws.close();
        }
        this.init();
    }

    /**
     * 接受到消息
     * @param e {@link MessageEvent}
     * @private
     */
    private onMessage(e: MessageEvent): void {
        if (this.options.handleMessage) {
            this.options.handleMessage(e.data);
        }
        console.log(`${this.LOG_PREFIX} 我接受到的消息是:${e.data}`);
    }

    /** 心跳检测 **/
    private heartCheck() {
        this.intervalId = setInterval(() => {
            if (this.ws != null) {
                this.ws.send(this.options.heart_msg);
                console.debug(`${this.LOG_PREFIX} 发送心跳`);
            }
        }, this.options.heart_time);
    }

}
