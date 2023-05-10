<template>
  <div class="comment-form" v-if="addCommentEnabled">
    <form class="comment-form">
      <ion-item>
        <ion-label position="stacked">Comment</ion-label>
        <ion-textarea></ion-textarea>
      </ion-item>
      <br />
      <ion-item>
        <ion-label position="stacked">Rating</ion-label>
        <br />
        <ion-radio-group>
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
      <ion-button>Post</ion-button>
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
import { ref } from "vue";

const addCommentEnabled = ref(false);

const handleAddComment = () => {
  addCommentEnabled.value = true;
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
