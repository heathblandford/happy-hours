import React, { Component } from 'react';
import Header from '../components/Header';
// import Aside from '../components/Aside';
import 'tachyons';
import CardList from '../components/CardList';
import { barList } from '../barList';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Header />
        </header>
        <div className="tc">
          <CardList barList={barList}/>
        </div>
      </div>
    );
  }
}

export default App;
