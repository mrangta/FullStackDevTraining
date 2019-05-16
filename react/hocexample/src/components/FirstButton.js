import React, { Component } from 'react';
import Decorator from './Decorator';

class FirstButton extends Component {
  callback = (event) => {
    this.props.callback("You clicked the first button");
  }
  render() {
    let buttonStyle = {
      backgroundColor: this.props.color,
      padding: '10px',
      borderRadius: '5px',
      color: 'white',
      margin: '10px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer'
    }

    return (
      <button style={buttonStyle} onClick={this.callback}>Click me!</button>
    )
  }
}

export default Decorator(FirstButton);
