<template>
    <svg class="icon" :style="{width:iconClass.width,height:iconClass.height}" aria-hidden="true">
        <use v-bind:xlink:href="'#'+iconHref"/>
    </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "IconFont",
    // props: ['iconClass', 'iconHref']
    props: {
        iconClass: {
            type: Object,
            default: {width: '1em', height: '1em'}
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
