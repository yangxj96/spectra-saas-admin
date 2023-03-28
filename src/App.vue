<template>
    <div id="nav">
        <el-config-provider :message="messageDefaultConfig">
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import AesEncryption from "@/utils/AesEncryption";

export default defineComponent({
    name: 'app',
    data() {
        return {
            messageDefaultConfig: {
                duration: 500,
            }
        }
    },
    created(){
        AesEncryption.decryption("67beea93c24c17b3fcb3c02338f761b74e4d55ce2b5b31257249dea1e9308aababbf2a1583ef8e2f8a3a76087fdfab5f33a9b438baf802018aaa1237d540072c91638d9fdff7d1f8974f201c16c581bfe7ef94580d")
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
