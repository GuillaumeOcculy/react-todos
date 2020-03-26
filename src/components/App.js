import React from "react";
import TodoList from "./TodoList";
import { TodoContext } from "./../TodoContext";

class App extends React.Component {
  state = { todoName: "" };

  handleChange = event => {
    this.setState({ todoName: event.target.value });
  };

  handleSubmit = (event, context) => {
    event.preventDefault();
    context.handleSubmit(this.state.todoName);
    this.setState({ todoName: "" });
  };

  render() {
    return (
      <div>
        <TodoContext.Consumer>
          {context => (
            <div>
              <form
                onSubmit={e => this.handleSubmit(e, context)}
                className="ui form"
              >
                <div className="field">
                  <label>Todo name</label>
                  <input
                    type="text"
                    value={this.state.todoName}
                    placeholder="Enter a todo name"
                    onChange={this.handleChange}
                    autoFocus
                  />
                </div>
                <button className="ui button" type="submit">
                  Submit
                </button>
              </form>

              <TodoList todos={context.todos} />
            </div>
          )}
        </TodoContext.Consumer>
      </div>
    );
  }
}

export default App;
