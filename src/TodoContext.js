import React, { useState } from "react";

const TodoContext = React.createContext({});

function TodoContextProvider(props) {
  const firstTodo = { title: "Hello World", isCompleted: false };
  const [todos, setTodos] = useState([firstTodo]);

  function handleSubmit(todoName) {
    if (!todoName) {
      return;
    }

    setTodos([...todos, { title: todoName, isCompleted: false }]);
  }

  function handleDeleteClick(todoName) {
    let newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.title === todoName);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleCompleteClick(todoName) {
    let newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.title === todoName);
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        handleSubmit: handleSubmit,
        handleCompleteClick: handleCompleteClick,
        handleDeleteClick: handleDeleteClick
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
