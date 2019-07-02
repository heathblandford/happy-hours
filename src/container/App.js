import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import NeighborhoodFilter from "../components/NeighorhoodFilter";
import DayFilter from "../components/DayFilter";
import { barList } from "../barList";
import "./app.css";
import Modal from "react-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfBars: barList,
      searchfield: "",
      neighborhoodFilter: "",
      dayFilter: "",
      modalIsOpen: false
    };

    this.clearFilters = this.clearFilters.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({ searchfield: "", neighborhoodFilter: "", dayFilter: "" });
    document.getElementById("nf").selectedIndex = 0;
    document.getElementById("df").selectedIndex = 0;
  }

  // modal state handlers
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal = e => {
    e.stopPropagation();
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = e => { //TODO uncomment this stuff when API is finished
    //this is a "manual" submit instead of just using standard HTML type submit
//    document.addNewBar.submit(); //this is how we submit
//    setTimeout(() => {
//      this.setState({ modalIsOpen: false });
//    }, 500); // set time out so that the web page had time to submit the form
//    e.preventDefault(); //prevent default submit option. ez pz
    alert("hey! sorry! thanks for trying to add a new bar and deal! this feature is still being developed, but you can tweet @whoisheath_ and let him know what you would like to add!")
  };

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
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {/* form action will eventually be the api URL that the backend has */}
          <form
            action="#"
            method="post"
            target="dummyframe"
            onSubmit={this.handleSubmit}
            name="addNewBar"
          >
            <label for="bar-name">Bar Name</label>
            <input
              type="text"
              name="Bar"
              placeholder="Puzzles Bar & Grill"
              id="bar-name"
              required
            />

            <br />

            <label for="neighborhood-name">Neighborhood</label>
            <input
              type="text"
              name="neighborhood"
              placeholder="Oakley"
              required
            />

            <br />

            <label for="deal">Happy Hour Special:</label>
            <textarea
              cols="50"
              rows="5"
              name="deal"
              placeholder="$3 drafts, $14 unlimited wings"
              required
            />

            <br />
            <div className="button-holder">
              <button type="submit" className="add-new-bar-buttons">Add it!</button>
              <button onClick={this.closeModal} className="add-new-bar-buttons">Close</button>
            </div>
          </form>
        </Modal>

        <header>
          <Header dealDay={dealDayFilter} />
          <div className="filters">
            <DayFilter dayChange={this.onDayChange} />
            <NeighborhoodFilter
              neighborhoodChange={this.onNeighborhoodFilter}
            />
            <Searchbox searchChange={this.onSearchChange} />
            <div>
              <button onClick={this.clearFilters} className="button">
                Clear Filters
              </button>
              <button onClick={this.openModal} className="button">
                Add a New Bar!
              </button>
            </div>
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
