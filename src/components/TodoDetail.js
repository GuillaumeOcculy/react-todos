import React from "react";
import { TodoContext } from "./../TodoContext";

function TodoDetail({ todo }) {
  function renderDeleteIcon() {
    return (
      <TodoContext.Consumer>
        {context => (
          <i
            className="close icon"
            onClick={() => context.handleDeleteClick(todo.title)}
          ></i>
        )}
      </TodoContext.Consumer>
    );
  }

  function renderCompleteIcon() {
    if (todo.isCompleted) {
      return;
    }

    return (
      <TodoContext.Consumer>
        {context => (
          <i
            className="check icon"
            onClick={() => context.handleCompleteClick(todo.title)}
          ></i>
        )}
      </TodoContext.Consumer>
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
