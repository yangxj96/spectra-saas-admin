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

export default defineComponent({
    name: 'app',
    data() {
        return {
            messageDefaultConfig: {
                duration: 500,
            },
            aes: {
                key: 'agt7QDmSlW+2V2YaDT9g6sDesu0xKPMKYOfyQsTcFpQ=',
                iv: 'AV1UVAnnP21vIKNHf3pfHw==',
                str: '8VwIeTF0oqFVo3Psek0MOg==',
                str2: 'agt7QDmSlW+2V2YaDT9g6sDesu0xKPMKYOfyQsTcFpQBXVRUCec/bW8go0d/el8f8VwIeTF0oqFVo3Psek0MOg=='
            }
        }
    },
    created() {
        console.log(AesUtil.decrypt(this.aes.str2));
        // console.log(AesUtil.decrypt2(this.aes.str, this.aes.key, this.aes.iv));
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
