<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="previouSlide" class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fa-solid fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, defineProps } from "vue";
import { db } from "../utils/connection.js";
import { getDoc, doc } from "firebase/firestore";

const { locationId } = defineProps(["locationId"]);
const currentSlide = ref(1);
const getSlideCount = ref(null);

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

const previouSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};

onBeforeMount(async () => {
  const locationDoc = await getDoc(doc(db, "locations", locationId));
  getSlideCount.value = locationDoc.data().image.length;
});
</script>

<style scoped>
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-page {
  display: flex;
  flex: 1;
}

.right {
  justify-content: flex-end;
}

i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #334443;
}
.left {
  justify-content: flex-start;
}

.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

span {
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.active {
  background-color: #1b171c;
}
</style>
