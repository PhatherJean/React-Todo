import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import styled from "styled-components";
const todo = [
  {
    task: "",
    id: Date.now(),
    complete: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  handleTaskCompleteToggle = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      }),
    });
  };

  handleTaskAdd = (taskName) => {
    const task = {
      name: taskName,
      id: Date.now(),
      complete: false,
    };
    const newTasks = [...this.state.todo, task];

    this.setState({
      todo: newTasks,
    });
  };

  handleTaskCompleted = () => {
    const newTasks = this.state.todo.filter((item) => {
      return !item.complete;
    });
    this.setState({
      todo: newTasks,
    });
  };
  //Methods to update State
  render() {
    return (
      <StyledApp className="App">
        <div className="head">
          <h1>Todo List: MVP</h1>
          <TodoForm
            handleTaskAdd={this.handleTaskAdd}
            handleTaskCompleted={this.handleTaskCompleted}
          />
        </div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          task={this.state.todo}
          handleTaskCompleteToggle={this.handleTaskCompleteToggle}
        />
      </StyledApp>
    );
  }
}

export default App;

const StyledApp = styled.div`
  background-color: floralwhite;
  color: #2f4f4f;
  height: 100vh;
  h1 {
    color: maroon;
    font-size: 4rem;
    font-weight: 900;
    text-align: center;
    margin: 0 auto;
    padding: 25px;
  }
  h2 {
    color: firebrick;
    font-size: 2rem;
    font-weight: 300;
    text-decoration: underline;
  }
  button {
    color: #fff;
    background-color: slategray;
    padding: 2px;
    margin: 2px;
  }
  p {
    font-size: 1.8rem;
    border: 1px maroon solid;
  }
  .itemstrike {
    background-color: red;
    text-decoration: black line-through;
  }
`;
