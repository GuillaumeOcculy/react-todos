import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  state = { todos: [{ title: "Hello World" }], todoName: "" };

  handleChange = event => {
    this.setState({ todoName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const todoName = this.state.todoName;
    const todos = this.state.todos;
    this.setState({ todos: [...todos, { title: todoName }], todoName: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todoName}
            placeholder="Enter a todo name"
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        {<TodoList todos={this.state.todos} />}
      </div>
    );
  }
}

export default App;
