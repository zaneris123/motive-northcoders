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
       <ion-list>
        <ion-item>
            <ion-select aria-label="Categories Filter" placeholder="Categories" :compareWith="compareWith" @ionChange="categoriesQuery" :multiple="true" v-model="categoriesFilter" > 
              <ion-select-option value="Nature">Nature</ion-select-option>
              <ion-select-option value="Culture">Culture</ion-select-option>
              <ion-select-option value="Scenic Spots">Scenic Spots</ion-select-option>
              <ion-select-option value="Outdoor">Outdoor</ion-select-option>
              <ion-select-option value="Adventure">Adventure</ion-select-option>
              <ion-select-option value="Hike spots">Hike Spots</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
      </div>
      <div id="locations-list">
        <ion-card
          class="card"
          v-for="location in locations"
          :key="location.location_id"
          @click="router.push(`/locations/${location.location_id}`)"
        >
          <figure id="location-pic">
            <img
              :src="location.locationInfo.image[0]"
              style="object-fit: cover"
            />
          </figure>
          <ion-card-header>
            <ion-card-title>{{ location.locationInfo.name }}</ion-card-title>
            <ion-card-subtitle
              >Recommended by {{ location.author }}</ion-card-subtitle
            >
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { collection, getDoc, getDocs, doc, query, where } from "firebase/firestore";
import { db } from "../utils/connection";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
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
  IonItem, 
  IonList, 
  IonSelect, 
  IonSelectOption
} from "@ionic/vue";

const router = useRouter();
const locations = ref([]);
const isLoading = ref(true);
const categoriesFilter = ref([]);

const categoriesQuery = async () => {
  if (categoriesFilter.value.length > 0) {
  locations.value = [];
  const locationsQuery = await getDocs(query(collection(db, "locations"), where('categories', 'array-contains-any', categoriesFilter.value)));
  const locationsAndAuthors = await Promise.all(
  locationsQuery.docs.map(async (individualLocation) => {
      const owner = individualLocation.data().posted_by;
      const userRef = await getDoc(doc(db, "users", owner));

      return {
        location_id: individualLocation.id,
        locationInfo: individualLocation.data(),
        author: userRef.data().name,
      };
    }))
  locations.value.push(...locationsAndAuthors);
  }

  else {
    locations.value = [];
  const locationsQuery = await getDocs(collection(db, "locations"));
  const locationsAndAuthors = await Promise.all(
  locationsQuery.docs.map(async (individualLocation) => {
      const owner = individualLocation.data().posted_by;
      const userRef = await getDoc(doc(db, "users", owner));

      return {
        location_id: individualLocation.id,
        locationInfo: individualLocation.data(),
        author: userRef.data().name,
      };
    }))
  locations.value.push(...locationsAndAuthors);
  }
}

onMounted(async () => {
  const locationsDocRef = collection(db, "locations");
  const LocDocs = await getDocs(locationsDocRef);
  const allLocations = LocDocs.docs;

  const locationsAndAuthors = await Promise.all(
    allLocations.map(async (individualLocation) => {
      const owner = individualLocation.data().posted_by;
      const userRef = await getDoc(doc(db, "users", owner));

      return {
        location_id: individualLocation.id,
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
}

ion-content #locations-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

ion-content #locations-list :hover {
  transform: scale(1.05);
}

ion-content #locations-list ion-card :hover {
  transform: none;
}

ion-card {
  height: 50vh;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
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
.card {
  color: white;
}
</style>
