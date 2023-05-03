<script setup>
import MainMap from '../components/MainMap.vue';
import Header from '../components/Header.vue';
import TestHeader from '../components/TestHeader.vue';
import IndividualLocation from '../components/IndividualLocation.vue';
import { useLocationCard } from '../stores/locationCard';

const locationStore = useLocationCard();
</script>

<template>
  <header id="header">
    <TestHeader />
  </header>
  <div v-if="locationStore.isMarkerClicked" id="overlay">
    <IndividualLocation />
  </div>
  <div id="map-container">
    <main id="map">
      <MainMap />
    </main>
  </div>
</template>

<style scope>
#map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
}

#map {
  display: block;
  margin: auto;
  width: 80vw;
  height: 70vh;
}

#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
