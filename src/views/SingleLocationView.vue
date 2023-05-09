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
        <ion-title>{{ locationObj.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="content-spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <figure>
        <Carousel
          :locationId="locationId"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <Slide v-for="(image, index) in locationObj.image" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
              <img :src="image" alt="location visual representation" />
            </div>
          </Slide>
        </Carousel>
      </figure>
      <ion-card>
        <ion-card-header class="header">
          <ion-card-title>About {{ locationObj.name }}</ion-card-title>
          <ion-card-subtitle>Recommended by {{ author }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-text
            v-for="(categories, index) in locationObj.categories"
            :key="index"
          >
            {{ categories }}<br />
          </ion-text>
        </ion-card-content>
        <ion-card-content>
          {{ locationObj.description }}
        </ion-card-content>
        <a :href="directionUrl"><img :src="staticUrl" /></a>
      </ion-card>
      <CommentSection />
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
  IonText,
  IonContent,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/connection";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import CommentSection from "../components/CommentSection.vue";

const route = useRoute();
const locationId = route.params.location_id;
const isLoading = ref(true);
const locationObj = ref({});
const author = ref("");
const staticUrl = ref("");
const directionUrl = ref("");

onMounted(async () => {
  const locationDoc = await getDoc(doc(db, "locations", locationId));
  const locationOwner = await getDoc(
    doc(db, "users", locationDoc.data().posted_by)
  );

  locationObj.value = locationDoc.data();
  author.value = locationOwner.data().name;
  isLoading.value = false;
  staticUrl.value = `https://maps.googleapis.com/maps/api/staticmap?size=1024x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C${
    locationDoc.data().location.latitude
  },${
    locationDoc.data().location.longitude
  }&zoom=14&key=AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4`;
  directionUrl.value = `https://www.google.com/maps/search/?api=1&query=${
    locationDoc.data().location.latitude
  }%2C${locationDoc.data().location.longitude}`;
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

ion-content figure {
  margin: 0;
}
ion-content figure .carousel {
  max-height: 45vh;
  height: 45vh;
}
ion-content figure .carousel .slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}
ion-content figure .carousel .slide-info img {
  min-width: 100%;
  height: 100%;
}
</style>
