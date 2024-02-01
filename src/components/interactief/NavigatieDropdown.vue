<script setup>
import { ref } from 'vue'

import NavigatieKnop from './NavigatieKnop.vue'

defineProps(['tekst', 'inhoud'])
// 'tekst' is wat weergegeven wordt op de uitklapknop, 'inhoud' is een lijst met paren van knoptitels en koppelingen

const uitgeklapt = ref(false) // Houdt bij of de uitklapknop is uitgeklapt of niet

function wisselen() {
    uitgeklapt.value = !uitgeklapt.value
}
const inhoudtijdelijk = ref([
    { tekst: 'Agenda', koppeling: 'agenda'},
    { tekst: 'Geloof', koppeling: 'activiteiten-geloof'},
    { tekst: 'Praktisch', koppeling: 'activiteiten-praktisch'}
])

</script>

<template>
    <div class="dropdown">
        <a class="uitklapknop" href="#" @click="wisselen">{{ tekst }}</a>
        <div class="dropdowninhoud" v-if="uitgeklapt"> <!-- De inhoud van de dropdown wordt alleen weergegeven als hij uitgeklapt is -->
            <NavigatieKnop v-for="knop in inhoudtijdelijk" :key="knop.tekst" :tekst="knop.tekst" :koppeling="knop.koppeling"/> 
        </div>
    </div>


</template>


<style scoped>


.dropdowninhoud {
    position: absolute; /* Zorg ervoor dat de inhoud onder de knop terechtkomt en de knop niet van plek veranderd */
}

/* Dit is momenteel gekopieerd uit NavigatieKnop.vue; als deze af is kijken of we het beide in een component kunnen zetten die hergebruikt wordt, of misschien stylen in een ander component */
a {
    color: #2c3e50;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>
