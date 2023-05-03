import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoading = defineStore('loading', () => {
  const loading = ref(true);

  const handleLoading = () => {
    loading.value = false;
  }

  return {loading, handleLoading};
})