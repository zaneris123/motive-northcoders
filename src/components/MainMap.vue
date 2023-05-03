<script setup>
import { GoogleMap } from '@capacitor/google-maps';
import { onMounted } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import { IonSpinner } from '@ionic/vue';
import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../utils/connections';
import { useLoading } from '../stores/loading';
import { useLocationCard } from '../stores/locationCard';

const isLoading = useLoading();
const locationStore = useLocationCard();

onMounted(async () => {
  const mapRef = document.getElementById('map');

  const coordinates = await Geolocation.getCurrentPosition();

  const newMap = await GoogleMap.create({
    id: 'my-map',
    element: mapRef,
    apiKey: 'AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4',
    config: {
      center: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      },
      zoom: 15
    }
  });

  const locationsDocRef = collection(db, 'locations');

  const LocDocs = await getDocs(locationsDocRef);

  const locationData = LocDocs.docs.map((secretLoc) => {
    const marker = secretLoc.data().location;

    return {
      coordinate: {
        lat: marker.latitude,
        lng: marker.longitude
      },
      title: secretLoc.id
    };
  });

  await newMap.addMarkers(locationData);

  newMap.setOnMarkerClickListener(async (marker) => {
    const fetchedSelectedLoc = await getDoc(doc(db, 'locations', marker.title));
    const { name, posted_by, description, cost } = fetchedSelectedLoc.data();

    locationStore.changeData(name, posted_by, description, cost);
    locationStore.handleMarkerClicks();

    isLoading.handleLoading();
  });
});
</script>

<template>
  <div v-if="isLoading.loading" class="loading">
    <ion-spinner></ion-spinner>
  </div>
  <div id="map"></div>
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
</style>
