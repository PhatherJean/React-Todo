import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = (props) => {
  const handleClick = () => {
    props.handleTaskCompleted();
  };
  return (
    <div>
      {props.task.map((item) => (
        <Todo
          handleTaskCompleteToggle={props.handleTaskCompleteToggle}
          key={item.id}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default TodoList;
