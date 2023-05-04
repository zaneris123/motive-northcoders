<script setup>
import { RouterView } from 'vue-router';
import { IonApp } from '@ionic/vue';
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <ion-app>
    <AppHeader/>
    <RouterView />
  </ion-app>
</template>

<style scoped></style>
