import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
// import Scroll from '../components/Scroll';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Header />
        </header>
        <div className="tc">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
