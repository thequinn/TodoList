import React from 'react';

function Todo({ count, id, task }) {
  alert(`Todo.js,   count: ${count},   task: ${task}`);
  
  return (
  <h1>{count}: {task}</h1> 
  );
}

export default Todo;