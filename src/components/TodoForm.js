import React from "react";

class TodoForm extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  //update input to the state
  handleChanges = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  //remove tasks from list
  removeChanges = () => {
    this.props.handleTaskCompleted();
  };
  //submit form property
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleTaskAdd(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* this is loose cannon 👹👹👺👺 we want it to be conteolled by state */}
        <input
          value={this.state.inputValue}
          onChange={this.handleChanges}
          placeholder="...todo"
          type="text"
          name="task"
        />
        <button>Add Todo</button>
        <button onClick={this.removeChanges}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
