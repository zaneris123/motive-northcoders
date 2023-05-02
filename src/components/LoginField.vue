<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseApp, db } from '../utils/connections';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useUserStore } from '../stores/user';

const store = useUserStore();
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

      store.changeData(data.user_id, data.name, data.img);

      const userDocRef = doc(db, 'users', data.user_id);

      return getDoc(userDocRef);
    })
    .then((document) => {
      if (document.exists()) {
        store.insertDate(document.data().created);
      } else {
        const createdAt = new Date();
        store.insertDate(createdAt);

        setDoc(doc(db, 'users', store.user.user_id), store.user);
      }

      store.handleLogIn();
    });
};
</script>

<template>
  <section id="userLoggedIn" v-if="store.isLogged">
    <h1>Welcome {{ store.user.name }}</h1>
    <img :src="store.user.img" alt="profile picture" />
    <p>Joined on: {{ store.user.created }}</p>
  </section>
  <section id="login" v-else>
    <h1>LOGIN</h1>
    <button @click="googleLogInHandler">Google Sign Up</button>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}

section h1 {
  font-size: 62px;
}

section button {
  font-size: 24px;
}
</style>
