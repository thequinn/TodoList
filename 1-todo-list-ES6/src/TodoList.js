import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    //alert(`TodoList create(): ${newTodo.task}`);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id );
    this.setState({ todos: newTodos });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id)
        return { ...todo, completed: !todo.completed }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));

    this.state.todos.map(todo =>
      console.log("TodoList.js ln-49, todo.task:", todo.task)
    );

    return (
      <>
        <h1>TodoList</h1>
        <NewTodoForm createTodo={this.create} />
        {todos}
      </>
    );
  }
}


export default TodoList;
