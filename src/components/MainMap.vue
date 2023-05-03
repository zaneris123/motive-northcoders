<script setup>
import { GoogleMap } from '@capacitor/google-maps';
import { onMounted } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import { IonSpinner } from '@ionic/vue';
import { useLoading } from '../stores/loading'

const isLoading = useLoading()

onMounted(async () => {
  const mapRef = document.getElementById('map');

  const coordinates = await Geolocation.getCurrentPosition();

  const newMap = await GoogleMap.create({
    id: 'my-map', // Unique identifier for this map instance
    element: mapRef, // reference to the capacitor-google-map element
    apiKey: 'AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4', // Google Maps API Key
    config: {
      center: {
        // The initial position to be rendered by the map
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      },
      // The initial zoom level to be rendered by the map
      zoom: 15
    },
  })

  isLoading.handleLoading();

});


</script>

<template>
  <div v-if="isLoading.loading" class="loading">
    <ion-spinner></ion-spinner>
  </div>
  <div>
    <capacitor-google-map id="map"></capacitor-google-map>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  width: 100vw;
  height: 90vh;
  text-align: center;
  align-items: center;
  justify-content: center;
}

capacitor-google-map {
  display: block;
  position: absolute;
  top: 10vh;
  width: 100vw;
  height: 90vh;
  margin: auto;
}
</style>
