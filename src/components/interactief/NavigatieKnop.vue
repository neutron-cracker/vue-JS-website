<script setup>
 // eslint-disable-next-line
defineProps(['tekst', 'koppeling'])
</script>


<template>
    <a class="koppeling" :href="koppeling">{{ tekst }}</a>
</template>