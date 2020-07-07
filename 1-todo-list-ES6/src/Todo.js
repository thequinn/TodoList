import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleChange(evt) {
    this.setState({task: evt.target.value});
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  
  render() {
    let result;
    if (this.state.isEditing) {
      result = 
        <div>
          <form onSubmit={this.handleUpdate}>
            <li>
              <input
                type="text"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <input type="submit" value="Save" />
            </li>
          </form>
        </div>
    } else {
      result = (
        <div>
          <li 
            className={this.props.completed && "completed"}
            onClick={this.handleToggle}
          >
              {this.props.task}
          </li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      )
    }
    return result;
  }
}

export default Todo;