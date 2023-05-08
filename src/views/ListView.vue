<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Motive List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <div id="filters">
        <ion-title>Filters will go here</ion-title>
      </div>
      <div id="locations-list">
        <ion-card v-for="location in locations" :key="location.locationInfo.id">
          <figure id="location-pic">
            <img
              :src="location.locationInfo.image[0]"
              style="object-fit: cover"
            />
          </figure>
          <ion-card-header>
            <ion-card-title>{{ location.locationInfo.name }}</ion-card-title>
            <ion-card-subtitle
              >Recomended by {{ location.author }}</ion-card-subtitle
            >
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../utils/connection";
import { onMounted, ref } from "vue";
import {
  IonCard,
  IonTitle,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSpinner,
} from "@ionic/vue";
const locations = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  const locationsDocRef = collection(db, "locations");
  const LocDocs = await getDocs(locationsDocRef);
  const allLocations = LocDocs.docs;

  const locationsAndAuthors = await Promise.all(
    allLocations.map(async (individualLocation) => {
      const owner = individualLocation.data().posted_by;
      const userRef = await getDoc(doc(db, "users", owner));

      return {
        locationInfo: individualLocation.data(),
        author: userRef.data().name,
      };
    })
  );
  locations.value.push(...locationsAndAuthors);
  isLoading.value = false;
});
</script>

<style scoped>
ion-content #spinner {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

ion-content #filters {
  display: flex;
  text-align: right;
  height: 15vh;
}

ion-content #locations-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 20px;
}

ion-content #locations-list :hover {
  transform: scale(1.05);
}
ion-card {
  width: 25vw;
  height: 35vh;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

ion-card figure {
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 0;
  margin-bottom: 0;
}

ion-card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

ion-card ion-card-header {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
}
</style>
