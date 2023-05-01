import { ref } from 'firebase/database'
import { defineStore } from 'pinia'

export const useUserData = defineStore('userData', () => {
  const isLogged = ref(false)
  const username = ref('')
  const userImg = ref('')
  const userId = ref('')
  const createdAt = ref(null)

  function loggedInUser(userData) {
    isLogged.value = true
    username.value = userData.username
    userImg.value = userData.userImg
    userId.value = userData.userId
    createdAt.value = userData.createdAt
    console.log("userStored:", username.value);
  }

  return {isLogged, username, userImg, userId, createdAt, loggedInUser}
})
