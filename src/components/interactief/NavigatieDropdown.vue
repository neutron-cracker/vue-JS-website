<script setup>
import { ref } from 'vue'

defineProps(['tekst', 'inhoud'])
// 'tekst' is wat weergegeven wordt op de uitklapknop, 'inhoud' is een lijst met paren van knoptitels en koppelingen

const uitgeklapt = ref(false) // Houdt bij of de uitklapknop is uitgeklapt of niet

function wisselen() {
    uitgeklapt.value = !uitgeklapt.value
}
</script>

<template>
    Waarom zie ik hier niks
    <div class="dropdown">
        <a class="uitklapknop" href="#" @click="wisselen">{{ tekst }}</a>
        <div class="dropdowninhoud" v-if="uitgeklapt"> <!-- De inhoud van de dropdown wordt alleen weergegeven als hij uitgeklapt is -->
            {{ inhoud }} Dit moet nog aangepast worden.
        </div>
    </div>


</template>
