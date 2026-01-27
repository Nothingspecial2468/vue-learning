<template>
  <header>
    <h1>Hello, {{ name }}</h1>
  </header>
</template>

<script setup>
import { ref } from "vue";
const name = ref("John");
</script>

<style scoped>
header {
  text-align: center;
  color: aliceblue;
  /* padding: 0.6rem; */
  background: #42b823;
}
</style>
