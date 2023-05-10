<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Post Location</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <img :src="staticMapUrl" />
        <form>
            <ion-input label="Location Title" v-model="locationTitle"></ion-input>
            <ion-textarea label="Location Description" v-model="locationDescription"></ion-textarea>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonTitle,
    IonContent,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonHeader
  } from "@ionic/vue";
  import { Geolocation } from "@capacitor/geolocation";
  import { onMounted, ref } from "vue";

  const staticMapUrl = ref("")
  const locationTitle = ref("")
  const locationDescription = ref("")

  
  onMounted( async ()=>{
      const coordinates = await Geolocation.getCurrentPosition();
    staticMapUrl.value = `https://maps.googleapis.com/maps/api/staticmap?size=1920x1920&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C${
        coordinates.coords.latitude
  },${
    coordinates.coords.longitude
  }&zoom=14&key=AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4`
  })

  </script>
  
  <style scoped>

  </style>
  