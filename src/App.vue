<template>
    <div id="nav">
        <el-config-provider :message="messageDefaultConfig">
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Client} from "@stomp/stompjs";

export default defineComponent({
    name: 'app',
    data() {
        return {
            messageDefaultConfig: {
                duration: 500,
            }
        }
    },
    created() {
        // new RabbitMQ({
        //     url: 'ws://192.168.1.4:15674/ws',
        //     username:'root',
        //     password:'QPOCe^7Q5qtoPD&O'
        // }).start()

        // const client = new Client({
        //     brokerURL: 'ws://192.168.1.4:15674/ws',
        //     connectHeaders: {
        //         login: 'root',
        //         passcode: 'QPOCe^7Q5qtoPD&O'
        //     },
        //     onConnect: frame => {
        //         console.log(`连接成功`, frame)
        //         client.subscribe(`/queue/rpp.location.report`, message => {
        //             console.log(`消息:`, message.body)
        //         })
        //     },
        //     onDisconnect: frame => {
        //         console.log(`连接断开:`, frame)
        //     },
        //     onStompError: frame => {
        //         console.log(`连接错误:`, frame)
        //     }
        // });
        // client.activate();
    }
})

</script>

<style lang="scss">

@import "assets/css/common.scss";

* {
    padding: 0;
    margin: 0;
}


</style>
