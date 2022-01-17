<template>
    <div id="nav">
        <el-config-provider>
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
    setup() {
        return {};
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
