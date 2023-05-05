<script setup>
import { useLocation } from '../stores/location';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonCardSubtitle } from '@ionic/vue';

const locationStore = useLocation();
</script>

<template>
  <ion-card>
    <img src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-item class="close-btn"> <ion-icon name="close-circle" item-right  @click="close()"></ion-icon> </ion-item>
      <ion-card-subtitle>Recommended by {{ locationStore.selectedLoc.posted_by }}</ion-card-subtitle>
      <ion-card-title>{{ locationStore.selectedLoc.name }}</ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<style scoped>
ion-card {
  position: absolute;
  width: 95vw;
  margin-left: 2.5vw;
  height: 85vh;
  overflow: scroll;
}

ion-card * {
  display: flex;
  width: 99%;
  max-width: 120vh;
  justify-content: center;
  align-items: center;
  margin: 1% auto;
}

ion-card img {
  margin: 1% auto;
}

</style>
