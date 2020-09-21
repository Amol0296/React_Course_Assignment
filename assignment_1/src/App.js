import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    UserOutput: [
      { name: 'Gol D. Roger', age: '40' },
      { name: 'Luffy', age: '20' },
      { name: 'Ace', age: '28' }
    ]
  }
  usernameEventHandler = (event) => {
    this.setState({
      UserOutput: [
        { name: 'Gol D. Roger', age: '40' },
        { name: 'Luffy', age: '20' },
        { name: event.target.name, age: '28' }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <UserInput change={this.usernameEventHandler} />
        <UserOutput name={this.state.UserOutput[0].name} age={this.state.UserOutput[0].age} />
        <UserOutput name={this.state.UserOutput[1].name} age={this.state.UserOutput[1].age} />
        <UserOutput name={this.state.UserOutput[2].name} age={this.state.UserOutput[2].age} />

      </div>
    );
  }
}

export default App;