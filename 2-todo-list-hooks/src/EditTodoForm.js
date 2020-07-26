import React, { useState } from 'react';
import useToggle from "./hooks/useToggle";
import useInputState from "./hooks/useInputState";

import TextField from '@material-ui/core/TextField';

import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function EditTodoForm({ id, task, toggleEditForm, editTodo }) {
  //alert(`EditTodoForm.js, task: ${task}`);

  const [value, handleChange, reset] = useInputState(task);

  return (
    <form onSubmit={(evt) => {
      evt.preventDefault();
      editTodo(id, value);
      //reset();  // QN: not needed after adding editTodo() last ln. 
      toggleEditForm();
    }}>
      <TextField value={value} onChange={handleChange} />
    </form>
  );
}

export default EditTodoForm;