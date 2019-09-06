import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Onboard from './components/Onboard'
import './App.css';

class App extends Component {

  //componentDidMount(){}


  render() {
    return (
      <div className="App">
        <Onboard />
      </div>
    );
  }
}

export default App;
