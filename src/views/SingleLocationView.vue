<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <div id="title-spinner" v-if="isLoading">
          <ion-spinner />
        </div>
        <ion-title>{{ location.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="content-spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <figure v-for="(image, index) in location.image" :key="index">
        <img :src="image" alt="location visual representation" />
      </figure>
      <ReportSubmit :locationId="locationId" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonSpinner,
} from "@ionic/vue";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/connection";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import ReportSubmit from "../components/ReportSubmit.vue";

const route = useRoute();
const locationId = route.params.location_id;
const isLoading = ref(true);
const location = ref({});

onMounted(async () => {
  const locationDoc = await getDoc(doc(db, "locations", locationId));
  location.value = locationDoc.data();
  isLoading.value = false;
});
</script>

<style scoped>
ion-header ion-toolbar #title-spinner {
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
}

ion-content #content-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
