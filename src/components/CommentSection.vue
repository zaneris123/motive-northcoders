<template>
  <ion-card>
    <ion-card-header>
      <ion-item>
        <ion-input label="Comment" placeholder="Type your comment here"/>
      </ion-item>
    </ion-card-header>
    <ion-card-content
      v-for="(singleCommentData, index) in commentArray"
      :key="index"
    >
    <Suspense>
      <SingleComment :singleCommentData="singleCommentData"/>
    </Suspense>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonItem
} from "@ionic/vue";
import SingleComment from "./SingleComment.vue";
import { onMounted, ref } from "vue";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRoute } from "vue-router";
import { db } from "../utils/connection";

const commentArray = ref([]);
const route = useRoute()
const locationId = route.params.location_id;

onMounted(async () => {
    const commentsQuery = await getDocs(query(collection(db, "comments"), where("location_id", "==", locationId)));
    commentsQuery.forEach((doc)=>{commentArray.value.push(doc.data())});
})
</script>

