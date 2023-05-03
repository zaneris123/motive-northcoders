import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLocationCard = defineStore('location', () => {
  const selectedLoc = ref({
    name: '',
    posted_by: '',
    description: '',
    cost: ''
  });

  const isMarkerClicked = ref(false);

  const changeData = (locName, author, desc, price) => {
    selectedLoc.value.name = locName;
    selectedLoc.value.posted_by = author;
    selectedLoc.value.description = desc;
    selectedLoc.value.cost = price;
  };

  const handleMarkerClicks = () => {
    isMarkerClicked.value = !isMarkerClicked.value;
  };

  return { selectedLoc, isMarkerClicked, changeData, handleMarkerClicks };
});
