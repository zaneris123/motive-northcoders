<script setup>
import {
  IonIcon,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonMenu,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonPage
} from '@ionic/vue';
import menuIcon from '../assets/menu-outline.svg';
import accountIcon from '../assets/person-outline.svg';
</script>

<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header id="first-header">
      <ion-toolbar id="first-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button>
            <ion-icon :icon="menuIcon" class="menu-icon"></ion-icon>
          </ion-menu-button>
        </ion-buttons>
        <ion-grid>
          <ion-row class="ion-align-items-center ion-justify-content-between">
            <ion-col size="8">
              <ion-title class="logo">
                <img
                  src="../assets/motive-logo-nobackground-horizontal.png"
                  alt="Motive - the secret locations app logo"
                />
              </ion-title>
            </ion-col>
            <ion-col size="2"
              ><ion-icon :icon="accountIcon" class="account-icon"></ion-icon
            ></ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<style scoped>
#first-header {
  width: 100vw;
  height: 10vh;
}

#first-toolbar {
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
