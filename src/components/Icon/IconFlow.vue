<template>
    <svg t="1681182208153" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="3473" width="200" height="200">
        <path d="M384 1024h256v-256H384z m64-192h128v128H448z" :fill="color" p-id="3474"></path>
        <path
            d="M896 768V512H544V256h128V0h-320v256h128v256H128v256H0v256h256v-256H192V576h640v192h-64v256h256v-256zM192 960H64v-128h128zM416 192V64h192v128zM960 960h-128v-128h128z"
            :fill="color" p-id="3475"></path>
    </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "IconFlow",
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