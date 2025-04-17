const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: "", // holds the input value
      todos: [], // array of todo items
    };
  },
}).mount("#app");
