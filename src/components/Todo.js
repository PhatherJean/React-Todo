import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.handleTaskCompleteToggle(props.item.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`item${props.item.complete ? "strike" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
