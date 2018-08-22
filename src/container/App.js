import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import Aside from '../components/Aside';
// import Scroll from '../components/Scroll';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Header />
        </header>
        <aside className="fl w-25">
          <Aside />
        </aside>
        <div className="tc fl w-75">
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
