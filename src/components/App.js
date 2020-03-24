import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    todos: [{ title: "Hello World", isCompleted: false }],
    todoName: ""
  };

  handleChange = event => {
    this.setState({ todoName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.todoName) {
      return;
    }

    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { title: prevState.todoName, isCompleted: false }
        ],
        todoName: ""
      };
    });
  };

  handleDeleteClick = todoName => {
    let todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.title === todoName);
    todos.splice(index, 1);

    this.setState({ todos });
  };

  handleCompleteClick = todoName => {
    let todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.title === todoName);
    todos[index].isCompleted = true;

    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Todo name</label>
            <input
              type="text"
              value={this.state.todoName}
              placeholder="Enter a todo name"
              autoFocus
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
        {
          <TodoList
            todos={this.state.todos}
            handleDeleteClick={this.handleDeleteClick}
            handleCompleteClick={this.handleCompleteClick}
          />
        }
      </div>
    );
  }
}

export default App;
