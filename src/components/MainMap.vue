<script setup>
import { GoogleMap } from '@capacitor/google-maps';
import { onMounted, defineComponent } from 'vue';




     
        onMounted( async () => {
          const mapRef = document.getElementById('map')
    
    const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: 'AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4', // Google Maps API Key
        config: {
            center: {
              // The initial position to be rendered by the map
                lat:33.6,
                lng: -117.9,
            },
            // The initial zoom level to be rendered by the map
            zoom: 8,
        }
    })

  })
  

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
