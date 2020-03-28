import React from "react";
import TodoDetail from "./TodoDetail";

function TodoList({ todos }) {
  function renderTodos(todos) {
    const list = todos.map((todo, index) => {
      return (
        <div key={index}>
          <div>{<TodoDetail key={index} todo={todo} />}</div>
        </div>
      );
    });

    return list;
  }

  return (
    <div>
      <h1>Todos ({todos.length})</h1>
      {renderTodos(todos)}
    </div>
  );
}

export default TodoList;
