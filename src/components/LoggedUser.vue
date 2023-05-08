<template>
  <ion-avatar slot="start">
    <ion-img :src="userStore.user.img"></ion-img>
  </ion-avatar>
  <ion-grid>
    <ion-row>
      <ion-col size="auto">
        <ion-label class="ion-text-wrap">{{ userStore.user.name }}</ion-label>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup>
import {
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>

<style scoped>
.md ion-img {
  width: 40px;
  height: 40px;
}

.md ion-label {
  font-size: 16px;
  margin-left: -7px;
}
</style>
