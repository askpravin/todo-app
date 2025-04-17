// Commit: initialize Vue app and data
const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: "", // holds input text
      todos: [
        // initial todos (optional)
        { text: "Learn Vue Directives", done: false },
        { text: "Build a Todo App", done: false },
      ],
    };
  },
  methods: {
    // Commit: add new todo if input is not empty
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = "";
      }
    },
    // Commit: remove a todo by index
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
}).mount("#app");
