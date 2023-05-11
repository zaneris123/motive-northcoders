<template>
  <div class="popup">
  <ion-card>
    <figure id="figure">
      <Carousel id="carousel">
        <Slide v-for="(image, index) in images" :key="index">
          <img
            class="carousel__item"
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
    <ion-card-header class="header">
      <ion-card-title @click="router.push(`/locations/${locId}`)">{{
        locName
      }}</ion-card-title>
      <ion-card-subtitle>Recommended by {{ owner }}</ion-card-subtitle>
    </ion-card-header>
  </ion-card>
  </div>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const router = useRouter();
const { locName, owner, images, locId } = defineProps([
  "locName",
  "owner",
  "images",
  "locId",
]);
</script>

<style scoped>
ion-card ion-card-header ion-card-title {
  cursor: pointer;
}

.popup {
  width: 60vw;
  height: 50vh;
  position: relative;
  top: -15vh
}
.md ion-card {
  cursor: auto;
  border-radius: 18px;
}

#figure {
  margin: 0;
  width: 100%;
}


#carousel {
  height: 100%;
}

.carousel__item {
  max-width: 100%;
  max-height: 100%;
}
</style>
