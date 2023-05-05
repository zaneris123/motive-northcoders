import { defineStore } from 'pinia';

export const useLocation = defineStore('location', {
  state: () => {
    return {
      selectedLoc: {
        name: '',
        posted_by: '',
        description: '',
        cost: '',
        categories: []
      },
      isMarkerClicked: false
    };
  },
  actions: {
    loadData(locName, author, desc, price, categories) {
      this.selectedLoc.name = locName;
      this.selectedLoc.posted_by = author;
      this.selectedLoc.description = desc;
      this.selectedLoc.cost = price;
      this.selectedLoc.categories.push(...categories);
    },
    handleMarkerClicks() {
      this.isMarkerClicked = !this.isMarkerClicked;
    }
  }
});


