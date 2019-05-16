import React from 'react';
import './App.css';
import FirstButton from './components/FirstButton';
import SecondButton from './components/SecondButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  callback = (message) => {
    this.setState({
      message: message
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Message from clicked button says: {this.state.message}</h3>
        <FirstButton callback={this.callback} />
        <SecondButton callback={this.callback} />
      </div>
    );
  }
}

export default App;
