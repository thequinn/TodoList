
let todos = [
  {task: "Walk dog", id: 1},
  {task: "Feed cat", id: 2}
];

const display = (id, updatedTodo) => {
  const newTodos = todos.map(todo => {
      console.log("display() todo:", todo);

      if (todo.id !== id) {
        return todo;
      } else {
        return {...todo, task: updatedTodo};
      }
  });
  console.log(newTodos);
};

let updatedTodo = "Feed cow";
display(2, updatedTodo);
