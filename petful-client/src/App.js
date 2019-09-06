import React, { Component } from 'react';
import Onboard from './components/Onboard'

import Users from './components/users/users'
import './App.css';

import { Route } from 'react-router-dom'



import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/' exact component={Onboard} />
        <Route path='/pets' component={Users} />
      </div>
    );
  }
}

export default App;
