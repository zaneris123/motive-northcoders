<script>
import { computed, defineComponent } from 'vue';
import { GoogleMap, Marker } from "vue3-google-map";
import { useGeolocation } from './useGeolocation';
import './assets/main.css';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBFYJIk12AQ4r5HmbjI_r2kyCRx7BBWq90'

export default defineComponent ({
  name: 'App',
  components: { GoogleMap, Marker },
  setup(){
    const {coords} = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    return {currPos}
  }
})

</script>

<template>
  <main>
  <header>
   <h1>Motive Map</h1>
   <h4>Your Position</h4>
   <p>Latitude: {{ currPos.lat.toFixed(2) }}, Longitude: {{ currPos.lng.toFixed(2) }}</p>
  </header>
  <section class="map">
  <GoogleMap api-key="AIzaSyBFYJIk12AQ4r5HmbjI_r2kyCRx7BBWq90" style="width: 90vw; height: 80vh; margin: 0 auto" :center="currPos" :zoom="15">
    <Marker :options="{ position: currPos }" />
  </GoogleMap>
  </section>
  </main>
</template>
