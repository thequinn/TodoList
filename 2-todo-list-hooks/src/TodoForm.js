import React, { useState } from 'react';

function TodoForm(props) {
  const [todo, setTodo] = useState();

  function handleChange(evt) {
    setTodo(evt.target.value)
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    props.addTodo(todo);
    setTodo(""); 
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="New item"
        value={todo} 
        onChange={handleChange} 
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoForm;