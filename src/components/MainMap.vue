<script setup>
import { GoogleMap } from '@capacitor/google-maps';
import { onMounted } from 'vue';
import { Geolocation } from '@capacitor/geolocation';

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
    }
  });
});
</script>

<template>
  <div class="greetings">
    <capacitor-google-map id="map"></capacitor-google-map>
  </div>
</template>

<style scoped>
capacitor-google-map {
  display: block;
  width: 100%;
  height: 100vh;
}
</style>
