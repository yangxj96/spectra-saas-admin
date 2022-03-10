<template>
    <svg class="icon" :style="{width:iconClass.width,height:iconClass.height,marginRight:'.4em'}" aria-hidden="true">
        <use v-bind:xlink:href="'#'+iconHref"/>
    </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "IconFont",
    props: {
        iconClass: {
            type: Object,
            default: {width: '1.3em', height: '1.3em'}
        },
        iconHref: {
            type: String,
            default: 'icon-yanzhengma',
            require: true
        }
    }
})
</script>

<style scoped>

</style>
