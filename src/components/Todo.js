import React from "react";

export default function Todo(props) {
  const { todo, toggle } = props;
  const handleToggle = () => {
    toggle(todo.id);
  };
  return (
    <div>
      <li
        onClick={handleToggle}
        className={todo.completed ? "completed" : ""}
        key={todo.id}
      >
        {todo.task}
      </li>
    </div>
  );
}
