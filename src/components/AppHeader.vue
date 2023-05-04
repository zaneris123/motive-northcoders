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
import LoginButton from './LoginButton.vue';
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
    <ion-header id="app-header">
      <ion-toolbar>
        <ion-buttons slot="start" class="menu-icon">
          <ion-menu-button>
            <ion-icon :icon="menuIcon" ></ion-icon>
          </ion-menu-button>
        </ion-buttons>
        <ion-grid>
          <ion-row class="ion-align-items-center ion-justify-content-between">
            <ion-col size="8">
              <ion-title id="logo">
                <img
                  src="../assets/4.svg"
                  alt="Motive - the secret locations app logo"
                />
              </ion-title>
            </ion-col>
            <ion-col size="2" class="account-icon">
              <LoginButton />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<style scoped>

#app-header {
  display: flex;
  width: 100vw;
  height: 11vh;
}


#logo {
  position: relative;
  text-align: center;
  width: 60vw;
  right: 7vw
}

#logo img {
  position: relative;
  height: 10vh;
  min-width: 200px;
  top: -4px
}

.menu-icon {
  color: black;
  width: 20vw;
  height: 10vh;
}

.account-icon {
  color: black;
  width: 20vw;
  height: 10vh;
}
</style>
