<script setup>
// eslint-disable-next-line
defineProps({
    tekst: String,
})
</script>

<template>
    <p class="inleiding">{{ tekst }}</p>
</template>

<style>
.inleiding {
    color: gray;
    padding-bottom: 3vh;
    padding-top: 3vh
}</style>