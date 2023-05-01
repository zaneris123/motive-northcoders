<script setup>
import { googleAuthenticationPopup } from '../utils/authentication'
// import { useUserData } from '../stores/userData.jsx'

const googleLogInHandler = async () => {
  const data = await googleAuthenticationPopup()
  console.log(data)
}
</script>

<template>
  <section>
    <h1>LOGIN</h1>
    <button @click="googleLogInHandler">Hello World!</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
