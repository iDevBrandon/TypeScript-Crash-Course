// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + ": " + todo.text);
// }

// let todo = { title: "trash", text: "take it out" };

// console.log(todo);

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ": " + todo.text);
}

let todo = { title: "trash", text: "take it out" };

console.log(todo);
