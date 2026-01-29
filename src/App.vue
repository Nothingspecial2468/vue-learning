<script setup>
import { ref, computed, watch } from "vue";
const newTodo = ref("");
const todos = ref([]);
const warningMsge = ref("");

function addTodo() {
  const value = newTodo.value.trim();
  if (!value) {
    return (warningMsge.value = "First enter a task to add into the list !");
  }

  warningMsge.value = "";

  todos.value.push({
    id: Date.now(),
    text: value,
    done: false,
  });

  newTodo.value = "";
}

watch(newTodo, (value) => {
  if (value.trim()) {
    warningMsge.value = "";
  }
});

function deleteTasks(todo) {
  if (!todo.done) {
    warningMsge.value = "Please complete the task before deleting it !";
    return;
  }

  warningMsge.value = "";
  todos.value = todos.value.filter((t) => t.id !== todo.id);
}

watch(
  todos,
  () => {
    warningMsge.value = "";
  },
  { deep: true },
);

const remainingTasks = computed(() => {
  return todos.value.filter((todo) => !todo.done).length;
});

const tasksStatus = computed(() => {
  if (!todos.value.length) return "";

  return remainingTasks.value === 0 ? "All tasks done 🎉" : `${remainingTasks.value} tasks left`;
});
</script>

<template>
  <h1>Todo App</h1>
  <input type="text" placeholder="Type a todo...." v-model="newTodo" @keyup.enter="addTodo" />

  <p>You typed: {{ newTodo }}</p>

  <button @click="addTodo">Add Todo</button>

  <ul>
    <p class="list-title">Here is the list of todos:</p>
    <p>{{ tasksStatus }}</p>

    <p v-if="warningMsge" class="warning">
      {{ warningMsge }}
    </p>

    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">
        {{ todo.text }}
      </span>
      <button @click="deleteTasks(todo)">❌</button>
    </li>
  </ul>

  <!-- <pre>{{ todos }}</pre> -->
</template>

<style scoped>
h1 {
  color: cornflowerblue;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  gap: 10px;
}

input[type="text"] {
  padding: 15px;
  font-size: 14px;
  width: 300px;
  margin: 10px auto;
  display: block;
}

p {
  text-align: center;
  font-size: medium;
  text-decoration-thickness: 8px;
}

button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  display: block;
  margin: 10px auto;
}

ul {
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

.list-title {
  font-weight: bold;
}

li {
  font-size: large;
  margin: 10px 0;
}

.done {
  text-decoration: line-through;
  color: gray;
  opacity: 0.6;
}

.warning {
  text-align: center;
  font-weight: 500;
  color: #c0392b;
}
</style>
