import React, { Component } from 'react';
import './App.css';
import StatefulComponent from './statefulComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatefulComponent dummyprop="dummycontent" />
      </div>
    );
  }
}

export default App;
