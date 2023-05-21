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
    <ion-content :key="submitButtonClicked">
      <div id="spinner" v-if="isLoading">
        <ion-spinner />
      </div>
      <div id="posting" v-else>
        <ion-title class="title">Current Location</ion-title>
        <img :src="staticMapUrl" class="map-preview" />
        <form class="post-form" @submit.prevent="handleSubmit">
          <ion-input
            label="Location Title:"
            v-model="locationTitle"
            class="title-input"
          ></ion-input>
          <ion-list>
            <ion-item>
              <ion-select
                aria-label="Fruit"
                interface="popover"
                placeholder="Categories"
                :multiple="true"
              >
                <ion-select-option value="apples">Adventure</ion-select-option>
                <ion-select-option value="oranges">Culture</ion-select-option>
                <ion-select-option value="bananas">Fun</ion-select-option>
                <ion-select-option value="hike spots"
                  >Hike spots</ion-select-option
                >
                <ion-select-option value="leisure">Leisure</ion-select-option>
                <ion-select-option value="nature">Nature</ion-select-option>
                <ion-select-option value="outdoors">Outdoors</ion-select-option>
                <ion-select-option value="scenic spots"
                  >Scenic spots</ion-select-option
                >
                <ion-select-option value="wild">Wild</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-select
                aria-label="Fruit"
                interface="popover"
                placeholder="Cost"
              >
                <ion-select-option value="free">Free</ion-select-option>
                <ion-select-option value="£">£</ion-select-option>
                <ion-select-option value="££">££</ion-select-option>
                <ion-select-option value="£££">£££</ion-select-option>
                <ion-select-option value="££££">££££</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
          <ion-textarea
            label="Location Description:"
            v-model="locationDescription"
            class="desc-input"
          >
          </ion-textarea>
          <ion-button @click="takePicture" class="post-btn"
            >Snap a Pic</ion-button
          >
          <div class="img-info">
            <ion-text class="img-text">
              <p>Images uploaded: {{ uploadedImgArr.length }}</p>
            </ion-text>
          </div>
          <ion-button class="submit-button" type="submit" expand="block"
            >Submit</ion-button
          >
        </form>
      </div>
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
  IonHeader,
  IonText,
  IonButton,
  IonTextarea,
  IonSpinner,
  IonInput,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  alertController,
} from "@ionic/vue";
import { Geolocation } from "@capacitor/geolocation";
import { onMounted, ref } from "vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import { firebaseConfig } from "../firebaseConfig";

const router = useRouter();
const userStore = useUserStore();
const isLoading = ref(true);
const staticMapUrl = ref("");
const locationTitle = ref("");
const locationDescription = ref("");
const uploadedImgArr = ref([]);

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
  });
  uploadedImgArr.value.push(image);
};

onMounted(async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  staticMapUrl.value = `https://maps.googleapis.com/maps/api/staticmap?size=1920x1920&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C${coordinates.coords.latitude},${coordinates.coords.longitude}&zoom=14&key=${firebaseConfig.apiKey}`;
  isLoading.value = false;
});

const handleSubmit = async () => {
  if (!userStore.isLogged) {
    const alert = await alertController.create({
      header: "Please Log-In",
      message: "Only logged users can send a report",
      buttons: [
        {
          text: "ok",
          handler: () => {
            router.push("/locations");
          },
        },
      ],
    });

    await alert.present();
  } else {
    const alert = await alertController.create({
      header: "Post Submited successfully",
      message: "The secret location has been succesfully submitted",
      buttons: [
        {
          text: "ok",
          handler: () => {
            router.push("/locations");
          },
        },
      ],
    });

    await alert.present();
  }
};
</script>

<style scoped>
ion-content #spinner {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

#posting {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 20px;
}

.post-btn {
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin: 0;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
}

.post-btn:hover {
  background-color: #2f3842;
}

.map-preview {
  border: 2px solid #ccc;
  border-radius: 5px;
  height: 250px;
  margin-bottom: 1rem;
  max-width: 400px;
  object-fit: cover;
  width: 100%;
}

.post-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 1rem;
}

.img-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.img-text {
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 0;
}

.title-input {
  margin-bottom: 1rem;
}

.desc-input {
  margin-bottom: 1rem;
  min-height: 100px;
}

.submit-button {
  margin-top: 2rem;
  font-size: 24px;
  --background: none;
  --border-style: none;
  --box-shadow: none;
  background-color: #414141;
}
</style>
