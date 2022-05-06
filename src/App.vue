<template>
    <div id="nav">
        <el-config-provider>
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";

@Options({})
export default class App extends Vue {

    public created(){
        console.log('初始化');
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
