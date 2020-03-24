import React from "react";
import TodoDetail from "./TodoDetail";

function TodoList({ todos, handleDeleteClick, handleCompleteClick }) {
  return (
    <div>
      <h1>Todos</h1>
      {renderTodos(todos, handleDeleteClick, handleCompleteClick)}
    </div>
  );
}

function renderTodos(todos, handleDeleteClick, handleCompleteClick) {
  const list = todos.map((todo, index) => {
    return (
      <div key={index}>
        <div>
          {
            <TodoDetail
              key={index}
              todo={todo}
              handleDeleteClick={handleDeleteClick}
              handleCompleteClick={handleCompleteClick}
            />
          }
        </div>
      </div>
    );
  });

  return list;
}

export default TodoList;
