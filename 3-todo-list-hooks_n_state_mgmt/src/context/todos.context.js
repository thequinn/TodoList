import React, { createContext } from 'react';
//import useTodoState from "../hooks/useTodoState";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
import todoReducer from '../reducers/todos.reducer';

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Release lady bugs", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //const todoStuff = useTodoState(defaultTodos); // replaced by next ln
  //const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer(
    "todos", 
    defaultTodos, 
    todoReducer
  ); 

  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}