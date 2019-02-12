import React, { Component } from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import Home from './Home';
import Tasks from './Tasks'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route peter={"lustig"} exact path="/" component={Home}/>
          <Route exact path="/tasks" component={Tasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
