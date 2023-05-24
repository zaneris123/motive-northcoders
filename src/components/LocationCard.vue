<template>
  <ion-card>
    <figure id="figure">
      <Carousel :locationId="locId" id="carousel" v-slot="{ currentSlide }">
        <Slide v-for="(image, index) in images" :key="index">
          <div v-show="currentSlide === index + 1" class="carousel-item">
            <img alt="location visual representation" :src="image" />
          </div>
        </Slide>
      </Carousel>
    </figure>
    <ion-card-header class="header">
      <ion-card-title
        id="location-name"
        @click="router.push(`/locations/${locId}`)"
        >{{ locName }}</ion-card-title
      >
      <ion-card-subtitle>Recommended by {{ owner }}</ion-card-subtitle>
    </ion-card-header>
  </ion-card>
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
import Carousel from "./LocCardCarousel.vue";
import Slide from "./Slide.vue";

const router = useRouter();
const { locName, owner, images, locId } = defineProps([
  "locName",
  "owner",
  "images",
  "locId",
]);
</script>

<style scoped>
ion-card {
  width: 50%;
  height: 50%;
  cursor: auto;
  border-radius: 18px;
}

#figure {
  margin: 0;
}

ion-card ion-card-header {
  background-color: rgb(74, 74, 74);
  height: 100%;
}

ion-card ion-card-header #location-name {
  cursor: pointer;
}

ion-card figure #carousel {
  max-height: 35vh;
  height: 35vh;
}

#carousel .carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

#carousel .carousel-item img {
  min-width: 100%;
  height: 75%;
}
</style>
