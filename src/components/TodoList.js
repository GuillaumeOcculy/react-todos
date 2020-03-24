import React from "react";
import TodoDetail from "./TodoDetail";

function TodoList({ todos }) {
  return renderTodos(todos);
}

function renderTodos(todos) {
  const list = todos.map((todo, index) => {
    return <div>{<TodoDetail key={index} todo={todo} />}</div>;
  });

  return list;
}

export default TodoList;
