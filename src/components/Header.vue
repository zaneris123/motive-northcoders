<script setup>
import { IonIcon, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';
import menuIcon from '../assets/menu-outline.svg';
import accountIcon from '../assets/person-outline.svg';
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-grid>
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-col size="2"><ion-icon :icon="menuIcon" class="menu-icon"></ion-icon></ion-col>
          <ion-col size="8">
            <ion-title class="logo">
              <img
                src="../assets/motive-logo-nobackground-horizontal.png"
                alt="Motive - the secret locations app logo"
              />
            </ion-title>
          </ion-col>
          <ion-col size="2"><ion-icon :icon="accountIcon" class="account-icon"></ion-icon></ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
ion-header {
  width: 100vw;
  height: 10vh;
}

ion-toolbar {
  display: flex;
  width: 100vw;
  height: 10vh;
}

.logo {
  text-align: center;
}

.logo img {
  height: 10vh;
  min-width: 200px;
}

.menu-icon {
  color: black;
  width: 50px;
  height: 50px;
}

.account-icon {
  color: black;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 5px;
  top: -25px;
}
</style>
