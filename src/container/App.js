import React, { Component } from 'react';
import Header from '../components/Header';
import 'tachyons';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import { barList } from '../barList';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listOfBars: barList,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // console.log(filterBars);
  }

  render() {
    const filterBars = this.state.listOfBars.filter(bar => {
      return bar.Bar.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div>
        <header className="tc">
          <Header />
          <Searchbox searchChange = {this.onSearchChange} />
        </header>
        <div className="tc">
          <CardList barList={filterBars}/>
        </div>
      </div>
    );
  }
}

export default App;
