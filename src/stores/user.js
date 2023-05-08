import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {
        user_id: "",
        name: "",
        img: "",
        created: "",
      },
      isLogged: false,
    };
  },
  actions: {
    changeData(userId, userName, userImg) {
      this.user.user_id = userId;
      this.user.name = userName;
      this.user.img = userImg;
    },
    insertDate(date) {
      this.user.created = date;
    },
    handleLogIn() {
      this.isLogged = true;
    },
  },
  persist: true,
});
