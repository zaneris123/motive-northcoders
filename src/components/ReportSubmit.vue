<template>
  <div @click="handleClick">
    <form @submit.prevent="handleSubmit">
      <ion-item>
        <ion-input
          v-model="newReport"
          label="Report inappropriate content"
          label-placement="floating"
          fill="solid"
          placeholder="Please enter description"
        >
        </ion-input>
        <ion-button
          fill="clear"
          size="small"
          type="submit"
          expand="block"
          :disabled="!userStore.isLogged"
          >Submit</ion-button
        >
      </ion-item>
      <br />
    </form>
  </div>
</template>

<script setup>
import { IonInput, IonButton, alertController, IonItem } from "@ionic/vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/connection";
import { ref, defineProps } from "vue";
import { useUserStore } from "../stores/user";
import uniqueId from "../utils/uniqueId";

const userStore = useUserStore();
const newReport = ref("");
const { locationId } = defineProps(["locationId"]);


const handleClick = async () => {
  if (!userStore.isLogged) {
    const alert = await alertController.create({
      header: "Please Log-In",
      message: "Only logged users could send a report",
      buttons: [
        {
          text: "ok",
        },
      ],
    });

    await alert.present();
  }
};
const handleSubmit = async () => {
    const repId = await uniqueId();
  const reportsDocRef = doc(db, "reports", repId);
  setDoc(reportsDocRef, {
    report_body: newReport.value,
    location_id: locationId,
    user_id: userStore.user.user_id,
  });
};


</script>
