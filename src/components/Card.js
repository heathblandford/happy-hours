import React from "react";
import "../Stylizers/card.css";

class Card extends React.Component {
  render() {
    const { barName, neighborhood, special, id } = this.props;

    return (
      <div className="Card">
        {/* <img
          src={`https://picsum.photos/400/200/?${id}`}
          alt="bar"
          className="responsiveImg"
        /> */}
        <h2 className="barName">{barName}</h2>
        <hr className="style-two" />
        <h5 className="neighborhood">Neighborhood: {neighborhood}</h5>
        <p className="special">
          {!special
            ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!"
            : special}
        </p>
        {/* <p className="expand">click to see more</p> */}
      </div>
    );
  }
}

export default Card;

