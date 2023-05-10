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
      <ion-card class="card">
        <ion-card-header class="header">
          <ion-card-title>About</ion-card-title>
          <ion-card-subtitle>Recommended by {{ author }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="content">
          <ion-text
            v-for="(categories, index) in locationObj.categories"
            :key="index"
          >
            {{ categories
            }}<span v-if="index !== locationObj.categories.length - 1">, </span>
          </ion-text>
          <p>Price: {{ locationObj.cost }}</p>
          <p class="description">{{ locationObj.description }}</p>
          <section id="map">
            <ion-card-title class="map-title">Location</ion-card-title>
            <figure>
              <a :href="directionUrl" target="_blank"
                ><img :src="staticUrl" class="image"
              /></a>
            </figure>
          </section>
        </ion-card-content>
        <CommentSection :locationId="locationId" />
      </ion-card>
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

.card {
  width: 100%;
  margin: 0 auto;
  background-color: #222;
}

.header {
  background-color: #333;
  color: #fff;
}

.content {
  padding: 1rem;
  font-size: 16px;
  color: #ddd;
}

.description {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-align: justify;
  border-bottom: 1px solid rgb(153, 151, 151);
  padding-bottom: 2rem;
}

#map {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

ion-card ion-card-content figure {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
