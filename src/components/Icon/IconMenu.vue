<template>
    <svg t="1681148048581" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="27835" width="200" height="200">
        <path
            d="M909 959H115a50 50 0 0 1-50-50V115a50 50 0 0 1 50-50h794a50 50 0 0 1 50 50v794a50 50 0 0 1-50 50z m-10-819a15 15 0 0 0-15-15H140a15 15 0 0 0-15 15v744a15 15 0 0 0 15 15h744a15 15 0 0 0 15-15V140z m-89.938 611H335a30 30 0 0 1 0-60h474.062a30 30 0 1 1 0 60z m0-209H335a30 30 0 0 1 0-60h474.062a30 30 0 1 1 0 60z m0-208H335a30 30 0 0 1 0-60h474.062a30 30 0 1 1 0 60zM215 751a30 30 0 1 1 30-30 30 30 0 0 1-30 30z m0-209a30 30 0 1 1 30-30 30 30 0 0 1-30 30z m0-208a30 30 0 1 1 30-30 30 30 0 0 1-30 30z"
            :fill="color" p-id="27836"></path>
    </svg>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "IconMenu",
    props: {
        color: {
            type: String,
            default: "#ffffff"
        }
    }
})
</script>

<style scoped>

</style>