import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import {FunctionalHello} from './FunctionHello';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <HelloWorld/>
        <HelloWorld name="Monika"/>
        <FunctionalHello/>
        <FunctionalHello name="Monika"/>
      </div>
    );
  }
}

export default App;
