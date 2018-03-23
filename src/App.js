import React, { Component } from 'react';

import Home from './Components/Home';
import AllRepos from './Components/AllRepos';

import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/me' component={AllRepos} />
      </Switch>
    );
  }
}

export default App;
