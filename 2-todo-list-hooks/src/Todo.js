import React from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  alert(`Todo.js,   task: ${task}`);
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem style={{ height: "64px" }}>

      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggleIsEditing}
        />
      ) : (
        <>
          {/* Adding  */}
          <Checkbox checked={completed} onClick={() => toggleTodo(id)}/>

          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>

            {/* Added aria-label for IconButton b/c it's an SVG.  SVG is not super accessible. */}
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>

            {/* When Edit btn is clicked, toggleIsEditing will change the state of var isEditing.  So changing the state will cause re-rendering, which cause a textbox to appear to replace curr todo text. */}
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>

          </ListItemSecondaryAction>
        </>
      )}

    </ListItem>
  );
}

export default Todo;
