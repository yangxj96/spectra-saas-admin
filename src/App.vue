<template>
    <div id="nav">
        <el-config-provider :message="messageDefaultConfig">
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
    name: 'app',
    data() {
        return {
            messageDefaultConfig: {
                duration: 500,
            }
        }
    },
    mounted() {

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
