import React, { createContext, useReducer } from 'react';
//import useTodoState from "../hooks/useTodoState";
import todoReducer from '../reducers/todos.reducer';

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Release lady bugs", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //const todoStuff = useTodoState(defaultTodos); // replaced by useReducer()
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}