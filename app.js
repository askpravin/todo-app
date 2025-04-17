const { createApp } = Vue;

createApp({
  methods: {
    // Add new task if input is not empty
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = ""; // clear input box
      }
    },
  },
}).mount("#app");
