<script setup>
import { ref } from "vue";
const newTodo = ref("");
const todos = ref([]);

function addTodo(){
  const value = newTodo.value.trim();
  if(!value) return;

  todos.value.push({
    id: Date.now(),
    text: value,
    done: false
  });

  newTodo.value = "";
}
</script>

<template>

  <h1>Todo App</h1>
  <input 
  type="text" 
  placeholder="Type a todo...." 
  v-model="newTodo" 
  @keyup.enter="addTodo" 
  />

  <p>You typed: {{ newTodo }}</p>

  <button @click="addTodo">
    Add Todo
  </button>

  <ul>
    <p class="list-title">Here is the list of todos:</p>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done}">
        {{ todo.text }}
      </span>
    </li>
  </ul>

  <!-- <pre>{{ todos }}</pre> -->
</template>

<style scoped>
h1{
  color: cornflowerblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  gap: 10px;
}

input[type="text"]{
  padding: 15px;
  font-size: 14px;
  width:300px;
  margin: 10px auto;
  display: block;
}

p{
  text-align: center;
  font-size: medium;
  text-decoration-thickness: 8px;
}

button{
  padding: 10px 15px;
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

ul{
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  margin: 20px auto;
}

.list-title{
  font-weight: bold;
  text-align: center;
}

li{
  font-size: medium;
  margin: 10px 0;
}

.done{
  text-decoration: line-through;
  color: gray;  
  opacity: 0.6;
}
</style>