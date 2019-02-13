import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Decision from "./Decision";
import Result from "./Result";

class App extends Component {
  state = {
    numberOfParticipants: 0,
    arrayWithTasks: [],
    tasksWithCountArray: []
  };

  changeArrayWithTasks = event => {
    this.setState({ arrayWithTasks: event });
  };

  changeNumberOfParticipants = event => {
    this.setState({ numberOfParticipants: event });
  };

  changeTasksWithCountArray = event => {
    this.setState({ tasksWithCountArray: event });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <Home
                changeNumberOfParticipants={this.changeNumberOfParticipants}
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/tasks"
            render={({ history }) => (
              <Tasks
                history={history}
                changeArrayWithTasks={this.changeArrayWithTasks}
              />
            )}
          />
          <Route
            exact
            path="/decide"
            render={({ history }) => (
              <Decision
                changeTasksWithCountArray={this.changeTasksWithCountArray}
                arrayWithTasks={this.state.arrayWithTasks}
                numberOfParticipants={this.state.numberOfParticipants}
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/result"
            render={({ history }) => (
              <Result
                tasksWithCountArray={this.state.tasksWithCountArray}
                history={history}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
