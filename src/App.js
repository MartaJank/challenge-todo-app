import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import CreateTask from './components/CreateTask';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tasks/add' component={CreateTask} />
          <Route exact path='/tasks/:id' component={TaskDetails} />
          <Route exact path='/tasks/:id/edit' component={EditTask} />
        </Switch>
      </div>
    );
  }
}

export default App;
