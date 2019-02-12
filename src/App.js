import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";

class App extends Component {
  state = {
    numberOfParticipants: 0
  };

  changeNumberOfParticipants = event => {
    this.setState({ numberOfParticipants: event });
    console.log(this.state.numberOfParticipants);
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
                numberOfParticipants={this.state.numberOfParticipants}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
