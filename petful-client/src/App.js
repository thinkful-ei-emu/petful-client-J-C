import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Onboard from './components/Onboard'
import Users from './components/users/users'
import './App.css';

class App extends Component {

  //componentDidMount(){}


  render() {
    return (
      <div className="App">
        <Onboard />
        <Users />
      </div>
    );
  }
}

export default App;
