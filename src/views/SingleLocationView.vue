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
        <Carousel id="carousel">
          <Slide v-for="(image, index) in locationObj.image" :key="index">
            <img 
            class="carousel_item"
            alt="location visual representation"
            :src="image"
            />
          </Slide>
          <template #addons>
          <Navigation />
          <Pagination />
        </template>
        </Carousel>
      </figure>
      <ReportSubmit :locationId="locationId" />
      <ion-card>
        <ion-card-header class="header">
          <ion-card-title>About {{ locationObj.name }}</ion-card-title>
          <ion-card-subtitle>Recommended by {{ locationObj.posted_by }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content >
          <ion-text v-for="(categories, index) in locationObj.categories" :key="index">
            {{categories}}<br/>
          </ion-text>
        </ion-card-content>
        <ion-card-content>
          {{locationObj.description}}
        </ion-card-content>
        <a :href="directionUrl"><img :src="staticUrl"/></a>
      </ion-card>
      <ion-card>
        CommentCard
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
import ReportSubmit from "../components/ReportSubmit.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const route = useRoute();
const locationId = route.params.location_id;
const isLoading = ref(true);
const locationObj = ref({});
const staticUrl = ref('');
const directionUrl = ref('');

onMounted(async () => {
  const locationDoc = await getDoc(doc(db, "locations", locationId));
  locationObj.value = locationDoc.data();
  isLoading.value = false;
  staticUrl.value = `https://maps.googleapis.com/maps/api/staticmap?size=1024x512&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C${locationDoc.data().location.latitude},${locationDoc.data().location.longitude}&zoom=14&key=AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4`;
  directionUrl.value = `https://www.google.com/maps/search/?api=1&query=${locationDoc.data().location.latitude}%2C${locationDoc.data().location.longitude}`;
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
