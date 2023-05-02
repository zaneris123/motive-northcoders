import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    user_id: '',
    name: '',
    img: '',
    created: ''
  });
  const isLogged = ref(false);

  const changeData = (userId, userName, userImg) => {
    user.value.user_id = userId;
    user.value.name = userName;
    user.value.img = userImg;
  };

  const insertDate = (date) => {
    user.value.created = date;
  };

  const handleLogIn = () => {
    isLogged.value = true;
  };

  return { user, changeData, insertDate, handleLogIn, isLogged };
});
