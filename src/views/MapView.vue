<script setup>
import MainMap from '../components/MainMap.vue';
import LocationCard from '../components/LocationCard.vue';
import { useLocation } from '../stores/location';

const locationStore = useLocation();
</script>

<template>
  <div v-if="locationStore.isMarkerClicked" id="overlay">
    <LocationCard />
  </div>
  <main id="map">
    <MainMap />
  </main>
</template>

<style scope>
#map {
  position: fixed;
  margin: 11vh auto 0;
  width: 99vw;
  height: 89vh;
}

#overlay {
  position: absolute;
  top: 10vh;
  width: 100vw;
  height: 90vh;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
}
</style>
