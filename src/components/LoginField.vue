<script setup>
import { googleAuthentionPopup } from '../utils/authentication'
</script>

<template>
  <section>
    <h1>LOGIN</h1>
    <button @click="googleAuthentionPopup">Hello World!</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
