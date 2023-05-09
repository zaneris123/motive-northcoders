<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>
        Rating: {{ singleCommentData.rating }}
        <ion-card-title>
          {{ singleCommentData.comment_text }}
        </ion-card-title>
        Posted on {{ postDate.getDate() }}/{{ postDate.getMonth() }}/{{
          postDate.getFullYear()
        }}
        By {{ userName }}
      </ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script setup>
import { defineProps, ref } from "vue";
import {
  IonCard,
  IonItem,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
} from "@ionic/vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/connection";

const { singleCommentData } = defineProps(["singleCommentData"]);
const postDate = ref(singleCommentData.posted_at.toDate());

const userName = ref("");
getDoc(doc(db, "users", singleCommentData.user_id)).then((data) => {
  userName.value = data.data().name;
});
</script>
