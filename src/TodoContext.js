import React, { useState, useEffect } from "react";
import jsonPlacholder from "./apis/jsonPlaceholder";

const TodoContext = React.createContext({});

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const response = await jsonPlacholder.get("/todos");
    setTodos(response.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

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
