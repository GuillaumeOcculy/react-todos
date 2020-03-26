import React from "react";

const TodoContext = React.createContext({});

class TodoContextProvider extends React.Component {
  state = { todos: [{ title: "Hello World", isCompleted: false }] };

  handleSubmit = todoName => {
    if (!todoName) {
      return;
    }

    this.setState(prevState => {
      return {
        todos: [...prevState.todos, { title: todoName, isCompleted: false }]
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
      <TodoContext.Provider
        value={{
          todos: this.state.todos,
          handleSubmit: this.handleSubmit,
          handleCompleteClick: this.handleCompleteClick,
          handleDeleteClick: this.handleDeleteClick
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoContext, TodoContextProvider };
