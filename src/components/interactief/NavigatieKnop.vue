<script setup>
 // eslint-disable-next-line
defineProps(['tekst', 'koppeling'])
</script>


<template>
    <a class="koppeling" :href="koppeling">{{ tekst }}</a>
</template>

<style scoped>
/* We laten de knopjes niet van kleur veranderen maar geven wel aan wanneer de muis eroverheen zit. */
a {
    color: #2c3e50;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>