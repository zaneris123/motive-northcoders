<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Motive Map</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="overlay" v-if="isMarkerClicked" @click="closeCardPopup">
        <LocationCard
          :locName="locName"
          :owner="owner"
          :images="images"
          @click.stop
        />
      </div>
      <div id="spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <div id="map"></div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { GoogleMap } from "@capacitor/google-maps";
import { onMounted, ref } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import {
  IonSpinner,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/vue";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../utils/connection";
import LocationCard from "../components/LocationCard.vue";

const isLoading = ref(true);
const locName = ref("");
const owner = ref("");
const images = ref([]);
const isMarkerClicked = ref(false);

onMounted(async () => {
  const mapRef = document.getElementById("map");

  const coordinates = await Geolocation.getCurrentPosition();

  const newMap = await GoogleMap.create({
    id: "my-map",
    element: mapRef,
    apiKey: "AIzaSyDotPJWfQDAHGbd9S7792H5Ds7DpiVgFlw",
    config: {
      center: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      },
      zoom: 15,
    },
  });

  const locationsDocRef = collection(db, "locations");

  const LocDocs = await getDocs(locationsDocRef);

  const locationData = LocDocs.docs.map((secretLoc) => {
    const marker = secretLoc.data().location;
    return {
      coordinate: {
        lat: marker.latitude,
        lng: marker.longitude,
      },
      title: secretLoc.id,
    };
  });

  await newMap.addMarkers(locationData);

  newMap.setOnMarkerClickListener(async (marker) => {
    const fetchedSelectedLoc = await getDoc(doc(db, "locations", marker.title));
    const { name, posted_by, image } = fetchedSelectedLoc.data();
    const userRef = await getDoc(doc(db, "users", posted_by));
    const author = userRef.data().name;

    locName.value = name;
    owner.value = author;
    images.value.push(...image);
    isMarkerClicked.value = true;
  });
  isLoading.value = false;
});

const closeCardPopup = () => {
  locName.value = "";
  owner.value = "";
  images.value.splice(0, images.value.length);
  isMarkerClicked.value = false;
};
</script>

<style scoped>
ion-content.md #map {
  text-align: center;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 72vw;
  height: 94vh;
}

ion-content.md #spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72vw;
  height: 93.8vh;
}

ion-content.md #overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 72vw;
  height: 94vh;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
  cursor: pointer;
}
</style>
