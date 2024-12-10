import { Client, type IFrame } from "@stomp/stompjs";

export default class RabbitMq {
    private readonly _client: Client;

    constructor(options: { url: string; username: string; password: string }) {
        this._client = new Client({
            brokerURL: options.url,
            connectHeaders: {
                login: options.username,
                passcode: options.password
            },
            onConnect: this.connect,
            onDisconnect: this.disconnect,
            onStompError: this.stompError
        });
    }

    start() {
        this._client.activate();
    }

    private connect(frame: IFrame) {
        console.log(`连接成功`, frame);
        this._client.subscribe(`/exchange/stream.location`, message => {
            console.log(`位置:`, message.body);
        });
    }

    private disconnect(frame: IFrame) {
        console.log("断开连接", frame);
    }

    private stompError(frame: IFrame) {
        console.log(`连接错误`, frame);
    }
}
