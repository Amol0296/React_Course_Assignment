import React, { Component } from 'react';

import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userData: ''
  }
  inputChnagedHandler = (event) => {
    this.setState({ userData: event.target.value });
  }
  deleteCHarHandler = (index) => {
    const text = this.state.userData.split('')
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userData: updatedText });

  }
  render() {
    let charList = this.state.userData.split('').map((ch, index) => {
      return (<CharComponent character={ch} key={index}
        clicked={() => this.deleteCHarHandler(index)} />)
    });
    return (
      <div className="App">
        <input type="text" onChange={this.inputChnagedHandler} value={this.state.userData} />
        <p>{this.state.userData}</p>
        <ValidationComponent inputLength={this.state.userData.length}></ValidationComponent>
        {charList}
      </div>
    );
  }
}

export default App;
