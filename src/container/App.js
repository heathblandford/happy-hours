import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import NeighborhoodFilter from "../components/NeighorhoodFilter";
import DayFilter from "../components/DayFilter";
import "./app.css";
import Modal from "react-modal";
import Swal from 'sweetalert2';
// require('dotenv').config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      bars: [],
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
    document.getElementById("sb").value = "";
  }

  // modal state handlers
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal = e => {
    e.stopPropagation();
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = e => {
    //TODO uncomment this stuff when API is finished
    //* this handle submit is already good to go for the form submit just need to have a real URL to send the data to
    //this is a "manual" submit instead of just using standard HTML type submit
    document.addNewBar.submit(); //this is how we submit
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
      Swal.fire({
        title: 'Bar Added!',
        text: "Thanks for adding a new deal! We're looking at it now and we'll add it if we find it valid!",
        type: 'success',
        confirmButtonText: 'Close'
      })

    }, 500);// set time out so that the web page had time to submit the form

    e.preventDefault(); //prevent default submit option. ez pz
    // alert(
    //   "hey! sorry! thanks for trying to add a new bar and deal! this feature is still being developed, but you can tweet @whoisheath_ and let him know what you would like to add!"
    // );
  };

  // TODO: Finish what you've started here!
  componentDidMount() {
    // fetch data from cincy-bars api
    fetch(`https://enigmatic-lowlands-48374.herokuapp.com/cincy-bars/bars`)
      .then(response => response.json())
      // { data } is object shorthand. this.setState() expects an object to return an array
      .then(bars => this.setState({ bars }));
  }

  render() {
    //filterbars based on existing bars
    const filterBars = this.state.bars.filter(bar => {
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
            action="https://enigmatic-lowlands-48374.herokuapp.com/cincy-bars/add-new-bar"
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
              <button type="submit" className="add-new-bar-buttons">
                Add it!
              </button>
              <button onClick={this.closeModal} className="add-new-bar-buttons">
                Close
              </button>
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
