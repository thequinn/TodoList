import React, {useContext} from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import {TodosContext} from "./context/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const {dispatch} = useContext(TodosContext)
  console.log("(Edit Form)EditTodoForm.js rendered ");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({type: "EDIT", id: id, newTask: value});
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin='normal' 
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
