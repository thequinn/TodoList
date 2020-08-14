import React, { createContext, useReducer } from 'react';
//import useTodoState from "./../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer.js";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  //const todoStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer({todoReducer, defaultTodos});

  return (
    <TodosContext.Provider value={todos, dispatch}>
      {props.children}
    </TodosContext.Provider>
  );
}