import React from "react";
import TodoDetail from "./TodoDetail";

function TodoList({ todos }) {
  return (
    <div>
      <h1>Todos</h1>
      {renderTodos(todos)}
    </div>
  );
}

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

export default TodoList;
