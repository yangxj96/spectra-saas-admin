<template>
    <svg t="1681317638390" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="9734" width="200" height="200">
        <path
            d="M648.45 247.01c-31.64 0-57.348 27.685-57.348 57.348v427.149c0 31.64 27.685 57.348 57.348 57.348S705.8 761.17 705.8 731.507V304.358c0-31.64-27.686-57.348-57.349-57.348z m-272.9 0c-31.64 0-57.349 27.685-57.349 57.348v427.149c0 31.64 27.686 57.348 57.349 57.348s57.348-27.685 57.348-57.348V304.358c1.978-31.64-25.708-57.348-57.348-57.348z"
            p-id="9735" :fill="color"></path>
    </svg>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "IconDisable",
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