import React from "react";
import "./components/Todo.css";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    const todos = [
      { task: "First task", completed: false, id: 0 },
      { task: "Second task", completed: false, id: 1 },
      { task: "Third task", completed: false, id: 2 },
    ];
    return (
      <div>
        <h2>Welcome to My Todo App!</h2>
        <ul>
          {todos.map((todo) => (
            <li className={todo.completed ? "completed" : ""} key={todo.id}>
              {todo.task}
            </li>
          ))}
        </ul>
        <form>
          <input />
          <button>+</button>
        </form>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
