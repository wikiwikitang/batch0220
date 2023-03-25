export const todoApi = {
  todos: [
    { content: 'write some code', isCompleted: false },
    { content: 'watch some movies', isCompleted: false },
    { content: 'listen some music', isCompleted: false },
  ],
  getAllTodos: async function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject('INIT todo failed');
        // return;

        resolve(JSON.parse(JSON.stringify(this.todos)));
      }, 500);
    });
  },
  addTodo: async function (todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!todo || !todo.content) {
          reject({ error: 'content is empty !' });
          return;
        }
        this.todos.push(todo);
        resolve({ addTodo: 'succeed' });
      }, 500);
    });
  },
  modTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({ error: 'index is not valid !' });
          return;
        }

        this.todos[index].isCompleted = !this.todos[index].isCompleted;
        resolve({ modTodo: 'succeed' });
      }, 500);
    });
  },
  delTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({ error: 'index is not valid !' });
          return;
        }

        this.todos = [
          ...this.todos.slice(0, index),
          ...this.todos.slice(index + 1),
        ];
        resolve({ delTodo: 'succeed' });
      }, 500);
    });
  },
};
