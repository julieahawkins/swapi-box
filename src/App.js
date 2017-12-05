import React, { Component } from 'react';
import Header from './Header/Header';
import Button from './Button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button />
      </div>
    );
  }
}

export default App;
