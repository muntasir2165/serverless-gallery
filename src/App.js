import React, { Component } from 'react';
import MyComponent from 'components/componentTemplate';
import './App.css';

class App extends Component {
  render() {
    return <MyComponent ownMessage='My Own Message' />;
  }
}

export default App;
