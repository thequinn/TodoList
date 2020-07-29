//import { useState } from "react";
import useLocalStorageState from './useLocalStorageState';
import uuid from "uuid/v4";

export default initialTodos => {
  //  const [todos, setTodos] = useState(initialTodos);
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos( [...todos, {id: uuid(), task: newTodoText, completed: false}] );
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTodoText) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? {...todo, task: newTodoText} : todo
      );
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        // WRONG!!
        // - map() returns a todo{}, but a prop of a todo{}
        //return todo.id === todoId ? todo.completed = !todo.completed : todo
        //
        // Correct:
        return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      });
      setTodos(updatedTodos);
    }
  };
}