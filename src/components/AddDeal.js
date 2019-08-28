import React, { Component } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../Stylizers/add_deal.css";

class AddDeal extends Component {
  handleSubmit = e => {
    //this is a "manual" submit instead of just using standard HTML type submit
    document.addNewBar.submit(); //this is how we submit
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
      Swal.fire({
        title: "Bar Added!",
        text:
          "Thanks for adding a new deal! We're looking at it now and we'll add it if we find it valid!",
        type: "success",
        confirmButtonText: "Close"
      });
    }, 500); // set time out so that the web page had time to submit the form

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Add A Deal</h1>
        <div className="add-a-deal-wrapper">
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
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeal;
