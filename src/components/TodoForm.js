import React from "react";

class TodoForm extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    //handle the input of the task to be added to the todo list
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="What you need to do ..."
          name="task"
        />
        <button>+</button>
      </form>
    );
  }
}
export default TodoForm;
