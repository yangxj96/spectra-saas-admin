<template>
    <div id="nav">
        <el-config-provider :message="messageDefaultConfig">
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import AesUtil from "@/utils/AesUtil";
import DemoApi from "@/api/DemoApi";

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
        DemoApi.demoGet();
        // let obj = {
        //     k1: 'value'
        // }
        //
        // let encrypt = AesUtil.encrypt('{"username":"sysadmin","password":"sysadmin"}');
        // console.log('秘钥', encrypt)
        // let decrypt = AesUtil.decrypt(encrypt);
        // console.log('秘钥2',decrypt)
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
