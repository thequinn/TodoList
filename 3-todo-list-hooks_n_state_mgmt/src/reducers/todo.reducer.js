import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: newTodoText, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== todoId);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
    default:
      return state;
  }
}

export default reducer;