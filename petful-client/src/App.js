import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Onboard from './components/Onboard'
import Pet from './components/Pet'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Onboard />
        <Pet />
      </div>
    );
  }
}

export default App;
