import React from "react";
import "./components/Todo.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  //----------------------State Initial------------
  state = {
    todos: [],
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //---------------Add task to List----------------
  addTask = (newtask) => {
    const task = {
      task: newtask,
      completed: false,
      id: Date.now(),
    };
    this.setState({
      todos: [...this.state.todos, task],
    });
  };
  //---------------Toggle Complete------------------
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }), //Map
    });
  };
  //--------------------Remove Task-----------------
  removeTask = () => {
    console.log("Removed");
    const done = this.state.todos.filter((todo) => {
      return !todo.completed;
    }); //filter todos
    this.setState({
      todos: done,
    });
  };
  //-------------------------------------------------

  render() {
    return (
      <div>
        <h2>Welcome to My Todo App!</h2>
        <TodoList todos={this.state.todos} toggle={this.toggleComplete} />
        <TodoForm addTask={this.addTask} />
        <button onClick={this.removeTask}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
