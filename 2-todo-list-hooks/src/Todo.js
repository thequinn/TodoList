import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ count,  id, task, completed, removeTodo, toggleTodo, editTodo }) {
  alert(`Todo.js,   count: ${count},   task: ${task}`);
  const [isEditing, toggleIsEditing] = useToggle(false); 
  
  return (
    <ListItem style={{ height: "64px" }}>
      { isEditing ? ( 
      <EditTodoForm 
        id={id}
        task={task}
        toggleEditForm={toggleIsEditing}
        editTodo={editTodo}
      />
      ) : ( 
      <>
        <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
        <ListItemText>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          {/* Added aria-label for IconButton b/c it's an SVG.  SVG is not super accessible. */}
          <IconButton aria-label='Delete' onClick={() => removeTodo(id)} >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='Edit' onClick={toggleIsEditing} >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      )}
    </ListItem>
  );
}

export default Todo;