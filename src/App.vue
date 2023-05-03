<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { IonApp } from '@ionic/vue';
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <ion-app>
    <RouterView />
  </ion-app>
</template>

<style scoped></style>
