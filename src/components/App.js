import React, { useState, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "./../TodoContext";

function App() {
  const [todoName, setTodoName] = useState("");
  const context = useContext(TodoContext);

  function handleChange(event) {
    setTodoName(event.target.value);
  }

  function handleSubmit(event, context) {
    event.preventDefault();
    context.handleSubmit(todoName);
    setTodoName("");
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, context)} className="ui form">
        <div className="field">
          <label>Todo name</label>
          <input
            type="text"
            value={todoName}
            placeholder="Enter a todo name"
            onChange={handleChange}
            autoFocus
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>

      <TodoList todos={context.todos} />
    </div>
  );
}

export default App;
