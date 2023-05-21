<template>
  <div class="report-form" v-if="reportEnabled">
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
        <ion-button fill="clear" size="small" type="submit" expand="block"
          >Submit</ion-button
        >
      </ion-item>
      <br />
    </form>
  </div>
  <div class="report-icon" @click="handleReport" v-else>
    <ion-icon :src="reportIcon"> </ion-icon>
    <aside class="text">
      <p>Report</p>
    </aside>
  </div>
</template>

<script setup>
import {
  IonInput,
  IonButton,
  alertController,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/connection";
import { ref, defineProps } from "vue";
import { useUserStore } from "../stores/user";
import reportIcon from "../assets/reader-outline.svg";

const userStore = useUserStore();
const newReport = ref("");
const { locationId } = defineProps(["locationId"]);
const reportEnabled = ref(false);

const handleReport = async () => {
  if (!userStore.isLogged) {
    const alert = await alertController.create({
      header: "Please Log-In",
      message: "Only logged users can send a report",
      buttons: [
        {
          text: "ok",
        },
      ],
    });

    await alert.present();
  } else {
    reportEnabled.value = true;
  }
};

const handleSubmit = async () => {
  const reportsDocRef = collection(db, "reports");
  addDoc(reportsDocRef, {
    report_body: newReport.value,
    location_id: locationId,
    user_id: userStore.user.user_id,
  });
  newReport.value = "";
  const alert = await alertController.create({
    header: "Report submitted",
    message:
      "The Motive team has received your report and will process your request",
    buttons: [
      {
        text: "ok",
      },
    ],
  });

  reportEnabled.value = false;
  await alert.present();
};
</script>

<style scoped>
.report-icon {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

ion-icon {
  width: 40px;
  height: 40px;
}

.text {
  font-size: 22px;
}

.report-icon :hover {
  color: #ffffff;
}
</style>
