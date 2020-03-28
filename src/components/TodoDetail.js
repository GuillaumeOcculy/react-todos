import React, { useContext } from "react";
import { TodoContext } from "./../TodoContext";

function TodoDetail({ todo }) {
  const context = useContext(TodoContext);

  function renderDeleteIcon() {
    return (
      <i
        className="close icon"
        onClick={() => context.handleDeleteClick(todo.title)}
      ></i>
    );
  }

  function renderCompleteIcon() {
    if (todo.isCompleted) {
      return;
    }

    return (
      <i
        className="check icon"
        onClick={() => context.handleCompleteClick(todo.title)}
      ></i>
    );
  }

  return (
    <div>
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.title}

        {renderDeleteIcon()}
        {renderCompleteIcon()}
      </p>
    </div>
  );
}

export default TodoDetail;
