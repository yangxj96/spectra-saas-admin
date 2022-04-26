<template>
    <div id="nav">
        <el-config-provider>
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";
import Socket, {IOptions} from "@/utils/Socket";

@Options({})
export default class App extends Vue {

    public created() {
        let o: IOptions = {
            handleMessage(e:string){
                console.log(`外部定义的处理方式,消息是:${e}`)
            }
        }
        let socket = new Socket('ws://127.0.0.1:8080/api/websocket/alarm', o);
        socket.send(JSON.stringify({name:"我是你爸爸"}));
    }

}

</script>

<style lang="scss">

@import "assets/css/common.scss";

* {
    padding: 0;
    margin: 0;
}


</style>
