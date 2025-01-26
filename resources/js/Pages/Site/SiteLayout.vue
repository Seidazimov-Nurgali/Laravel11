<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Navbar from "@/Pages/Site/Navbar.vue";
import Footer from "@/Pages/Site/Footer.vue";
import {usePage} from "@inertiajs/vue3";

onMounted(() => {
    initFlowbite();
})

defineProps({
    carts_count: Number
})
</script>
<template>
    <Navbar :carts_count="carts_count"/>

    <slot/>

    <Footer/>
</template>
