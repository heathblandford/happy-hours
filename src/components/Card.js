import React from "react";
import "../Stylizers/card.css";
import Modal from "react-modal";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal = e => {
    e.stopPropagation();
    this.setState({ modalIsOpen: false });
  };

  // updateBar = e => {
  //   e.stopPropagation();
  //   alert("hey, sorry. thanks for trying to correct this deal, but this feature is currently being developed. If you'd like you can tweet @whoisheath_ and let him know what the deal for this bar should be")
  // }

  render() {
    const {
      barName,
      neighborhood,
      special,
      id,
      phoneNumber,
      address,
      website,
      // lat,
      // long
    } = this.props;

    // const position = [lat, long];

    return (
      <div className="Card" onClick={this.openModal}>
        <h2 className="barName">{barName}</h2>
        <h5 className="neighborhood">{neighborhood}</h5>
        <p className="special">
          {!special
            ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!"
            : special}
        </p>
        <p className="expand">click to see more</p>

        {/* modal time baby */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <h1>{barName}</h1>
          <h3 className="neighborhood">{neighborhood}</h3>
          <p className="special">{phoneNumber}</p>
          <p>
            Address:
            <a href={`https://maps.google.com/?q=${address}`}>{address}</a>
          </p>
          <p>
            Website:
            <a href={!website ? "#" : website}>
              {!website ? "hmmm... no website?" : website}
            </a>
          </p>
          <p className="special">Speical:{" "} 
            {!special
              ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!"
              : special}
          </p>
          {/* <div id="mapID">
            <Map center={position} zoom={18}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </div> */}
          <div id="buttonHolder">
            <button onClick={this.closeModal}>CLOSE</button>
            <Link to={{
              pathname: '/update-a-bar',
              state: {
                barName: barName
              }
            }}>
              <button>UPDATE</button>
            </Link>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Card;
