import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLocation = defineStore('location', () => {
  const selectedLoc = ref({
    name: '',
    posted_by: '',
    description: '',
    cost: '',
    categories: ''
  });

  const isMarkerClicked = ref(false);

  const loadData = (locName, author, desc, price, categories) => {
    selectedLoc.value.name = locName;
    selectedLoc.value.posted_by = author;
    selectedLoc.value.description = desc;
    selectedLoc.value.cost = price;
    selectedLoc.value.categories = categories
  };

  const handleMarkerClicks = () => {
    isMarkerClicked.value = !isMarkerClicked.value;
  };

  return { selectedLoc, isMarkerClicked, loadData, handleMarkerClicks };
});
