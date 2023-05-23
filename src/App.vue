<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <div id="main-logo">
            <ion-img
              src="../src/assets/1.svg"
              alt="app logo"
              @click="goTo('/map')"
            />
          </div>

          <ion-list id="navigation">
            <ion-list-header>Menu</ion-list-header>
            <ion-item
              lines="none"
              :class="route.path.startsWith('/map') ? 'selected' : 'not_active'"
              @click="goTo('/map')"
              ><ion-label>Motive Map</ion-label></ion-item
            >
            <ion-item
              lines="none"
              :class="
                route.path.startsWith('/locations') ? 'selected' : 'not_active'
              "
              @click="goTo('/locations')"
              ><ion-label>Motive List</ion-label></ion-item
            >
            <ion-item
              lines="none"
              :class="
                route.path.startsWith('/about') ? 'selected' : 'not_active'
              "
              @click="goTo('/about')"
              ><ion-label>About</ion-label></ion-item
            >
          </ion-list>

          <ion-list id="login" v-if="!userStore.isLogged">
            <ion-list-header>Sign In</ion-list-header>
            <ion-item lines="none">
              <GoogleLoginButton />
            </ion-item>
            <ion-item lines="none">
              <TwitterLogInButton />
            </ion-item>
            <ion-item lines="none">
              <FbLoginButton />
            </ion-item>
          </ion-list>

          <ion-list id="account" v-else>
            <ion-list-header>My Account</ion-list-header>
            <ion-item lines="none">
              <LoggedUser />
            </ion-item>
            <ion-item
              class="button"
              lines="none"
              @click="goTo('/post')"
              :class="
                route.path.startsWith('/post') ? 'selected' : 'not_active'
              "
            >
              <ion-icon :src="addIcon" />
              <ion-label>New Motive</ion-label></ion-item
            >
            <ion-item
              id="logout"
              class="not_active"
              lines="none"
              @click="showAlert"
              ><ion-label>Log Out</ion-label></ion-item
            >
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonContent,
  IonList,
  IonListHeader,
  IonImg,
  IonItem,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonLabel,
  IonIcon,
  alertController,
} from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";
import GoogleLoginButton from "./components/GoogleLogInButton.vue";
import TwitterLogInButton from "./components/TwitterLogInButton.vue";
import FbLoginButton from "./components/FbLoginButton.vue";
import LoggedUser from "./components/LoggedUser.vue";
import { useUserStore } from "./stores/user";
import addIcon from "./assets/add-outline.svg";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const showAlert = async () => {
  const alert = await alertController.create({
    header: "Confirm Logout",
    message: "Are you sure you want to log out?",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
      },
      {
        text: "Logout",
        handler: () => {
          userStore.$reset();
        },
      },
    ],
  });

  await alert.present();
};

const goTo = (goalPath) => {
  router.push(goalPath);
};
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu ion-list#navigation {
  border-bottom: 2px solid var(--ion-color-step-150, #d7d8da);
  margin: auto 20px;
}

#main-logo {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

ion-menu ion-content ion-list#navigation ion-list-header {
  padding-left: 10px;
  font-size: 24px;
  font-weight: 600;
  min-height: 20px;
  margin-bottom: 20px;
}

ion-menu ion-content ion-img {
  width: 300px;
  height: 300px;
}

ion-menu ion-content ion-list#navigation ion-item {
  font-size: 18px;
  cursor: pointer;
}

ion-menu ion-content ion-list#navigation ion-item.not_active :hover {
  background-color: #49555e;
  padding: 10px;
  border-radius: 10px;
}

ion-menu ion-content ion-list#navigation ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
  border-radius: 8px;
}

ion-menu ion-content ion-list#navigation ion-item.selected :hover {
  padding: 5px;
}

ion-menu ion-list#login {
  margin: auto 20px;
}

ion-menu ion-content ion-list#login ion-list-header {
  padding-left: 10px;
  font-size: 24px;
  font-weight: 600;
  min-height: 20px;
  margin: 20px auto;
}

ion-menu ion-list#account {
  margin: auto 20px;
}

ion-menu ion-content ion-list#account ion-list-header {
  padding-left: 10px;
  font-size: 24px;
  font-weight: 600;
  min-height: 20px;
  margin: 20px auto;
}

ion-menu ion-content ion-list#account ion-item ion-label {
  margin-left: 10px;
}
ion-menu ion-content ion-list#account ion-item {
  font-size: 18px;
}

ion-menu ion-content ion-list#account ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
  border-radius: 10px;
}

ion-menu ion-content ion-list#account ion-item.not_active :hover {
  background-color: #959c8d;
  padding: 10px;
  border-radius: 10px;
}

ion-menu ion-content ion-list#account ion-item.selected :hover {
  padding: 10px;
}

ion-menu ion-content ion-list#account ion-item.button {
  cursor: pointer;
}

#logout {
  cursor: pointer;
}
</style>
