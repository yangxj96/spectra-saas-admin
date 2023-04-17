<template>
    <div id="nav">
        <el-config-provider :locale="locale" :message="message">
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";
import useAppStore from "@/plugin/store/modules/app";

export default defineComponent({
    name: 'app',
    data() {
        return {
            locale: useAppStore().lang,
            message: {max: 500}
        }
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
