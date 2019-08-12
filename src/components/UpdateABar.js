import React, { Component } from "react";
import Swal from "sweetalert2";
import "../Stylizers/update_bar.css";
import { Link } from 'react-router-dom';

class UpdateBar extends Component {
  handleSubmit = e => {
    //this is a "manual" submit instead of just using standard HTML type submit
    document.updateBar.submit(); //this is how we submit
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
      Swal.fire({
        title: "Bar Updated!",
        text:
          "Thanks for updating our info! We're looking at it now and we'll add it if we find it valid!",
        type: "success",
        confirmButtonText: "Close"
      });
    }, 500); // set time out so that the web page had time to submit the form

    e.preventDefault();
  };

  render() {
    const { barName } = this.props.location.state;

    return (
      <div id='wrapper'>
        <h1 id='title'>Update a Bar!</h1>
        <div className="formWrapper">
          <form
            action={`https://enigmatic-lowlands-48374.herokuapp.com/cincy-bars/update-bar/${barName}`}
            method="post"
            target="dummyframe"
            onSubmit={this.handleSubmit}
            name="updateBar"
          >
            <h3 id="update-title">Updating information for: <span id='bar-title'>{barName}</span></h3>

            <select name="to-update" required>
              <option value="">Choose Something to Update...</option>
              <option value="bar-name">Bar Name</option>
              <option value="deal">Deal</option>
              <option value="neighborhood">Neighborhood</option>
              <option value="other">Other</option>
            </select>
            <textarea
              cols="50"
              rows="5"
              name="update-value"
              placeholder="Type your update here..."
              required
            />

            <button type="submit">Send it!</button>
            <Link to='/deals'>
              <button>Back to Deals</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateBar;
