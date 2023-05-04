<script setup>
import { useLocationCard } from '../stores/locationCard';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/vue';

const locationStore = useLocationCard();
</script>

<template>
  <ion-card>
    <img src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-subtitle>Recomended by {{ locationStore.selectedLoc.posted_by }}</ion-card-subtitle>
      <ion-card-title>{{ locationStore.selectedLoc.name }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>{{ locationStore.selectedLoc.description }}</ion-card-content>
  </ion-card>
</template>

<style scoped>
ion-card {
  width: 70vw;
  height: 60vh;
  overflow: scroll;
}
</style>
