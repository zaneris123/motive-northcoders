<script setup>
import {
  IonAvatar,
  IonButton,
  IonPopover,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonChip
} from '@ionic/vue';
// import accountIcon from '../assets/person-outline.svg';
import { useUserStore } from '../stores/user';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseApp, db } from '../utils/connections';

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
  <div class="button">
    <ion-chip id="LoginPopoverButton">
      <ion-avatar id="LoginAvatar">
        <img
          alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        />
      </ion-avatar>
      <ion-label id="LoginLabel">{{ store.isLogged ? store.user.name : 'Login' }}</ion-label>
    </ion-chip>
    <ion-popover trigger="LoginPopoverButton" :dismiss-on-select="true">
      <ion-content v-if="store.isLogged">
        <ion-list>
          <ion-item :button="true">User Info</ion-item>
          <ion-item
            :button="true"
            @click="
              () => {
                store.$reset();
              }
            "
            >Log out</ion-item
          >
        </ion-list>
      </ion-content>
      <ion-content v-else>
        <ion-list>
          <ion-item :button="true" @click="googleLogInHandler">Login in</ion-item>
        </ion-list>
      </ion-content>
    </ion-popover>
  </div>
</template>

<style scoped>
#LoginLabel {
  font-size: 0.8vw;
}
#LoginAvatar {
  width: 50px;
  min-width: 30px;
  height: 50px;
  min-height: 50px;
}
#LoginPopoverButton {
  width: 10vw;
  height: 6vh;
}
#LoginIcon {
  padding: 1px;
  height: 5vh;
  /* width: ; */
}
</style>
