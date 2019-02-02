import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import NeighborhoodFilter from "../components/NeighorhoodFilter";
import DayFilter from "../components/DayFilter";
import { barList } from "../barList";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfBars: barList,
      searchfield: "",
      neighborhoodFilter: "",
      dayFilter: ""
    };

    this.clearFilters = this.clearFilters.bind(this);
  }

  //set searchfield state based on searchfield value
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
    // console.log(filterBars);
  };

  //set neiborhoodfilter state based on selector value
  onNeighborhoodFilter = event => {
    this.setState({ neighborhoodFilter: event.target.value });
  };

  //set dayFilter state based on selector value
  onDayChange = event => {
    this.setState({ dayFilter: event.target.value });
    console.log(event.target.value);
  };

  clearFilters() {
    this.setState({ searchfield: '', neighborhoodFilter: '', dayFilter: '' });
    document.getElementById('nf').selectedIndex = '0';
    document.getElementById('df').selectedIndex = '0';
  }

  render() {
    //filterbars based on existing bars
    const filterBars = this.state.listOfBars.filter(bar => {
      return (
        bar.Bar.toLowerCase().includes(this.state.searchfield.toLowerCase()) &&
        bar.Neighborhood.includes(this.state.neighborhoodFilter)
      );
    });

    const dealDayFilter = this.state.dayFilter;

    return (
      <div>
        <header>
          <Header dealDay={dealDayFilter} />
          <div className="filters">
            <button onClick={this.clearFilters} className="button">Clear</button>
            <DayFilter dayChange={this.onDayChange} />
            <NeighborhoodFilter
              neighborhoodChange={this.onNeighborhoodFilter}
            />
            <Searchbox searchChange={this.onSearchChange} />
          </div>
        </header>
        <div className="tc">
          <CardList barList={filterBars} dealDay={dealDayFilter} />
        </div>
      </div>
    );
  }
}

export default App;
