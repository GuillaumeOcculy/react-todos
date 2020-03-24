import React from "react";

function TodoDetail({ todo, handleDeleteClick, handleCompleteClick }) {
  function renderDeleteIcon() {
    return (
      <i
        className="close icon"
        onClick={e => handleDeleteClick(todo.title)}
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
        onClick={e => handleCompleteClick(todo.title)}
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
