<template>
  <div class="comment-form" v-if="addCommentEnabled">
    <form class="comment-form">
      <ion-item>
        <ion-label position="stacked">Comment</ion-label>
        <ion-textarea v-model="commentText"></ion-textarea>
      </ion-item>
      <br />
      <ion-item>
        <ion-label position="stacked">Rating</ion-label>
        <br />
        <ion-radio-group v-model="commentRating">
          <ion-item>
            <ion-label>1</ion-label>
            <ion-radio value="1"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
            <ion-radio value="2"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
            <ion-radio value="3"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>4</ion-label>
            <ion-radio value="4"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>5</ion-label>
            <ion-radio value="5"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <br />
      <ion-button @click="handlePostComment">Post</ion-button>
    </form>
  </div>
  <div class="comment-adding" v-else>
    <ion-icon name="add" :src="addIcon" @click="handleAddComment"></ion-icon>
  </div>
</template>

<script setup>
import addIcon from "../assets/add-circle-outline.svg";
import {
  IonIcon,
  IonButton,
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonTextarea,
} from "@ionic/vue";
import { defineProps, ref } from "vue";
import { Timestamp } from "firebase/firestore";
import { useUserStore } from "../stores/user";
import { alertController } from "@ionic/vue";

const userStore = useUserStore();
const { postCommentEventHandler, locationId } = defineProps([
  "postCommentEventHandler",
  "locationId",
]);
const commentText = ref("");
const commentRating = ref("1");
const commentInput = { user_id: userStore.user.user_id };
const addCommentEnabled = ref(false);

const handleAddComment = async () => {
  if (userStore.isLogged) {
    addCommentEnabled.value = true;
  } else {
    const alert = await alertController.create({
      header: "Log-In to comment",
      message: "You must be signed in to comment on posts",
      buttons: [
        {
          text: "ok",
        },
      ],
    });
    await alert.present();
  }
};

const handlePostComment = async () => {
  commentInput.posted_at = Timestamp.fromDate(new Date());
  commentInput.location_id = locationId;
  commentInput.comment_text = commentText.value;
  commentInput.rating = Number(commentRating.value);
  postCommentEventHandler(commentInput);
  commentText.value = "";
  commentRating.value = "1";
  addCommentEnabled.value = false;
};
</script>

<style scoped>
.comment-adding {
  display: flex;
  justify-content: right;
  align-items: center;
}

ion-icon {
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
}
.comment-adding :hover {
  background-color: #333;
  border-radius: 50%;
}

.comment-form {
  background-color: #232323;
  color: #fff;
  padding: 20px;
}

.comment-form ion-item {
  --background: #343434;
  --color: #fff;
  --placeholder-color: #b3b3b3;
  --border-color: #343434;
}

.comment-form ion-textarea {
  --background: #343434;
  --color: #fff;
  --placeholder-color: #b3b3b3;
  --border-color: #343434;
}

.comment-form ion-button {
  background-color: #03a9f4;
  color: #fff;
}
</style>
