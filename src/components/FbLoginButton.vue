<template>
  <ion-button class="twitter-button" @click="LogInHandler">
    <ion-icon :src="fbIcon"></ion-icon>
    Sign In with Facebook
  </ion-button>
</template>

<script setup>
import fbIcon from "../assets/icons8-facebook.svg";
import { IonButton, IonIcon } from "@ionic/vue";
import { useUserStore } from "../stores/user";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp, db } from "../utils/connection";

const userStore = useUserStore();
const auth = getAuth(firebaseApp);
const provider = new FacebookAuthProvider();

const LogInHandler = () => {
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const data = {
        user_id: user.uid,
        name: user.displayName,
        img: user.photoURL,
      };

      userStore.changeData(data.user_id, data.name, data.img);

      const userDocRef = doc(db, "users", data.user_id);

      return getDoc(userDocRef);
    })
    .then((document) => {
      if (document.exists()) {
        userStore.insertDate(document.data().created);
      } else {
        const createdAt = new Date();
        userStore.insertDate(createdAt);

        setDoc(doc(db, "users", userStore.user.user_id), userStore.user);
      }

      userStore.handleLogIn();
    });
};
</script>

<style scoped>
ion-button {
  font-size: 18px;
  --background: none;
  --border-style: none;
  --box-shadow: none;
}

ion-button ion-icon {
  margin-right: 18px;
}
</style>
