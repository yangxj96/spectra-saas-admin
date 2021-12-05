<template>
    <div>首页</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import request from '@/plugin/request/';

export default defineComponent({
    setup(props) {
        console.log('props:', props);
        return {};
    },
    created() {
        // http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=Pu4vMaG1Bhaj84FLgt9b9KyHExKLcfaj
        // https://api.map.baidu.com/weather/v1/?district_id=330100&data_type=all&ak=Pu4vMaG1Bhaj84FLgt9b9KyHExKLcfaj
        // https://www.yijilian.com/baiduApi/weather/v1?district_id=330100&data_type=all&ak=Pu4vMaG1Bhaj84FLgt9b9KyHExKLcfaj
        request.get("https://www.yijilian.com/baiduApi/weather/v1?district_id=330100&data_type=all&ak=Pu4vMaG1Bhaj84FLgt9b9KyHExKLcfaj").then(res => {
            console.log(res);
        })
        // const socket = new WebSocket("wss://www.yijilian.com/websocket/213");
        // socket.onopen = this.w_open;
        // socket.onmessage = this.w_message;
    },
    // methods: {
    //     w_open() {
    //         console.log("socket打开")
    //         return null;
    //     },
    //     w_message(e: any) {
    //         console.log("socket消息", e);
    //         return null;
    //     }
    // }
});
</script>

<style scoped>

</style>
