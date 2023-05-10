<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Comments:</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list v-for="(singleCommentData, index) in commentArray" :key="index">
        <ion-item lines="none">
          <SingleComment :singleCommentData="singleCommentData" />
        </ion-item>
      </ion-list>
      <AddComment />
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonList,
} from "@ionic/vue";
import SingleComment from "./SingleComment.vue";
import AddComment from "./AddComment.vue";
import { onMounted, ref, defineProps } from "vue";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/connection";

const commentArray = ref([]);
const { locationId } = defineProps(["locationId"]);

onMounted(async () => {
  const commentsQuery = await getDocs(
    query(collection(db, "comments"), where("location_id", "==", locationId))
  );
  commentsQuery.forEach((doc) => {
    commentArray.value.push(doc.data());
  });
});
</script>

<style scoped>
ion-card {
  margin-top: 2rem;
}
</style>
