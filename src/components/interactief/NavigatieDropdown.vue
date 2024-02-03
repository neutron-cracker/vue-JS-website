<script setup>
import { ref } from 'vue'

import NavigatieKnop from './NavigatieKnop.vue'

defineProps(['tekst', 'inhoud'])
// 'tekst' is wat weergegeven wordt op de uitklapknop, 'inhoud' is een lijst met paren van knoptitels en koppelingen

const uitgeklapt = ref(false) // Houdt bij of de uitklapknop is uitgeklapt of niet

function wisselen() {
    uitgeklapt.value = !uitgeklapt.value
}

</script>

<template>
    <div class="dropdown">
        <a class="uitklapknop" href="#" @click="wisselen">{{ tekst }}</a>
        <ul class="dropdowninhoud" v-if="uitgeklapt"> <!-- De inhoud van de dropdown wordt alleen weergegeven als hij uitgeklapt is -->
            <li v-for="knop in inhoud.value" :key="knop.tekst"> <!-- We gebruiken een lijst om de knoppen onder elkaar weer te geven -->
                <NavigatieKnop class="inhoudsknop" :tekst="knop.tekst" :koppeling="knop.koppeling"/>
            </li>
        </ul>
    </div>


</template>


<style scoped>

.dropdowninhoud {
    position: absolute; /* Zorg ervoor dat de inhoud onder de knop terechtkomt en de knop niet van plek veranderd */
    list-style-type: none; /* Geen bolletjes bij de opties */
    padding: 0px;
    margin: 20px;
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
