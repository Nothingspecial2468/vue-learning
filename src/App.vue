<script setup>
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";

import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <Header />
  <p>
    Let's add some fun. Click it as many times as u want so the click is
    <button @click="count++">
      {{ count }}
    </button>
    times clicked.
  </p>
  <MainContent />
  <Footer />
</template>

<style scoped>
p {
  padding: 2rem;
  text-align: center;
  font-size: large;
  font-weight: bold;
  margin-top: 70px;
  background: #333;
}
button {
  cursor: pointer;
  margin: 10px;
  border: 1px solid black;
  border-radius: 3px;
}
</style>
