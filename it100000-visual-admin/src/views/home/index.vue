<template>
    <div v-auth="'alibaba'" >首页</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TestMixin from "@/mixins/TestMixin";

export default defineComponent({
    setup(props) {
        console.log('props:', props);
        return {};
    },
    mixins: [TestMixin],
    created() {
        this.test();
    }

});
</script>

<style scoped>

</style>
