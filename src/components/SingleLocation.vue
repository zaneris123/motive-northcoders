<script setup> 
import { getSingleLocation } from '../utils/getSingleLocation';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { IonTitle, IonLoading } from '@ionic/vue';

const route = useRoute();
const locoId = route.params.location_id;
const locationInfo = ref(null)
const isLoading = ref(true)
getSingleLocation(locoId).then((location)=>{
    locationInfo.value = location;
    console.log(location)
    isLoading.value = false;
})

</script>

<template>
    <ion-loading :isOpen="isLoading"></ion-loading>
    <ion-title v-if="locationInfo">
        <h1>{{ locationInfo.name }}</h1>
        <h2>{{ locationInfo.categories.map((image)=>{return image}) }}</h2>

    </ion-title>
</template>


