<template>
  <section class="comment">
    <div class="avatar">
      <ion-avatar slot="start">
        <ion-img :src="userInfo.img" alt="user profile picture"></ion-img>
      </ion-avatar>
    </div>
    <article class="content">
      <p class="name">{{ userInfo.name }}</p>
      <p class="text" style="font-size: 22px">
        {{ singleCommentData.comment_text }}
      </p>
      <p class="rating">Rating: {{ singleCommentData.rating }}</p>
      <p class="date">
        Posted on {{ postDate.getDate() }}/{{ postDate.getMonth() }}/{{
          postDate.getFullYear()
        }}
      </p>
    </article>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { IonAvatar, IonImg } from "@ionic/vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/connection";

const { singleCommentData } = defineProps(["singleCommentData"]);
const postDate = ref(singleCommentData.posted_at.toDate());
const userInfo = ref({});

getDoc(doc(db, "users", singleCommentData.user_id)).then((user) => {
  userInfo.value = {
    name: user.data().name,
    img: user.data().img,
  };
});
</script>

<style>
.comment {
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
}

.avatar {
  margin-right: 16px;
}

.name {
  color: #ccc;
}

.date {
  color: #ccc;
}

.rating {
  color: #ccc;
}
</style>
