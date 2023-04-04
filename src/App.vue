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
            demo: {
                key: '126be5d2a146745cfb43baaf4e1a2b11a2c201a690c08e5650ac50213e5ec1f3',
                iv:'d2f58ec82c913a23a920d92215bfc8d7',
                ciphertext:'Emvl0qFGdFz7Q7qvThorEaLCAaaQwI5WUKxQIT5ewfPS9Y7ILJE6I6kg2SIVv8jXfpLpN88OdFeD4RlUAbGk/KU0jqKgfej1+7Uw64lCDn9pc0o84AKKC95vzv2TryFRHDVtc6s6jM/JiZfRXFpj6kFAGijP/5ahsgYLOvlmr3pPtDAjDDLwpHHvR4Ux8mjnoekMQiBRAZySbz7pUBq+MZuBmIC4JS/bEfW4bdN/gD2xBW4oKgkHLMstQAoSPSQLOc27IHhWMu4tci7v1bRDuH7axIdgG5p13KJp2l4uACjmgOJCOWjobCXsgQvz2+nWcSs5mEkjMkM4sfPBMfHYld+DappcXmWQiwtw4BViVDGCDBywq5bEVbFmVRS/h6ZHgiKoBaNSwgg9FbmGuMhQgNbfvEsSSvO+dvFgzNwSnBB0NXpXXtPxbiFYM+EgUaa2GvgghMUb56XUoRggivhxMgKQn6EVqQSe6nJ8JOseHXgYaZwRrZPhz4b/VIPyzdpcdoZOl4O7Ix/7mHNlwfM5W7y46S0EQBmPn+amrHE93D5dK7r2EsaXnY0LUCaMb0RZszu5yNO4P7W4hs3a6cVK1L3JxG6UkmOQhp+RUoU1/8ni9Z/pgRp8glX3QmzsLvVn/wPrD8IpTqdOener'
            }
        }
    },
    created(){
        AesUtil.decrypt(this.demo.ciphertext);
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
