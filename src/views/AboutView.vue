<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>About Us</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="bg-image no-scroll">
      <div id="spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <div class="about-info" v-else>
        <ion-card class="card">
          <div class="welcome-info">
            <h2>Welcome to Motive</h2>
            <p>
              Welcome to Motive, the ultimate guide to discovering unique and
              hidden spots in the UK. With our app, you can explore lesser-known
              activities and locations, making your journey more exciting and
              adventurous.
            </p>

            <p>
              At Motive, we understand that traditional tourist spots can be
              overrated, crowded, and expensive. That's why we've curated a list
              of secret hotspots that are perfect for budget-friendly travel or
              exploring for free. Our app highlights off-the-beaten-path
              attractions and hidden gems, allowing you to experience the UK in
              a more authentic and less touristy way.
            </p>

            <p>
              Whether you're a tourist or a local, our app is designed to help
              you discover something new and exciting. From quaint villages to
              hidden beaches, the Motive app offers a unique perspective on the
              UK, showcasing the country's lesser-known gems.
            </p>

            <p>
              Our mission is to provide you with a fun and adventurous way to
              uncover the best-kept secrets of the UK. With the Motive app, you
              can explore with confidence, knowing that you'll discover
              something truly special.
            </p>

            <p>
              So, what are you waiting for? Download the Motive app today and
              start your journey to discovering the UK's best-kept secrets.
            </p>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonCard,
  IonTitle,
  IonContent,
  IonPage,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonSpinner,
} from "@ionic/vue";

import { ref } from "vue";
const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 500);
</script>

<style scoped>
.about-info {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-content .welcome-info {
  text-align: center;
  margin: 20px;
}
.bg-image {
  background: url("../../859582.jpg") no-repeat 100% 100%;
  --background: none;
}
.no-scroll .scroll-content {
  overflow: hidden;
}

ion-card {
  background: transparent;
  box-shadow: 0 0 10px white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  color: white;
}

@media screen and (max-width: 750px) {
  ion-card {
    background: transparent;
    box-shadow: 0 0 10px white;
    height: 100%;
  }
}
</style>
