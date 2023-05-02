<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseApp, db } from '../utils/connections';
import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { useUserStore } from '../stores/user';
import { IonButton, IonImg, IonText, IonContent } from '@ionic/vue';
import { userStore } from '../stores/user';

// const store = useUserStore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const googleLogInHandler = () => {
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const data = {
        user_id: user.uid,
        name: user.displayName,
        img: user.photoURL
      };

      const userDocRef = doc(db, 'users', data.user_id);

      return Promise.all([userStore.set('user', JSON.stringify(data)), getDoc(userDocRef)]);
      // store.changeData(data.user_id, data.name, data.img);
    })
    .then((document) => {
      if (document[1].exists()) {
        console.log(document[1]);
        // store.insertDate(document.data().created);
      } else {
        // const createdAt = new Date();
        // store.insertDate(createdAt);
        console.log("Error!");
        // setDoc(doc(db, 'users', store.user.user_id), store.user);
      }

      // store.handleLogIn();
    });
};
</script>

<template>
  <ion-content id="userLoggedIn" v-if="false">
    <ion-text
      ><h1>Welcome {{ store.user.name }}</h1></ion-text
    >
    <ion-img :src="store.user.img" alt="profile picture" />
    <p>
      <ion-text>Joined on: {{ store.user.created }}</ion-text>
    </p>
  </ion-content>
  <ion-content id="login" v-else>
    <ion-text><h1>LOGIN</h1></ion-text>
    <ion-button @click="googleLogInHandler">Google Sign Up</ion-button>
  </ion-content>
</template>

<style scoped>
ion-content {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#login ion-text {
  font-size: 32px;
}

#login ion-button {
  font-size: 16px;
}
</style>
