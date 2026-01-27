<script setup>
import { ref } from "vue";
const count = ref(0);
const newTodo = ref("");
</script>

<template>
  <h1>Vue Playground</h1>

  <p>
    Click as many times you want:
    <button @click="count++">
      {{ count }}
    </button>
  </p>

  <h2>Todo App</h2>
  <input type="text" placeholder="Type a todo...." v-model="newTodo" />
  <p>You typed: {{ newTodo }}</p>
</template>

<style scoped>
button {
  cursor: pointer;
  margin-left: 7px;
  border: 1px solid black;
  border-radius: 3px;
}
</style>
