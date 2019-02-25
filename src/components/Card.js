import React from "react";
import "../Stylizers/card.css";
import Modal from "react-modal";

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

  closeModal = (e) =>{
    e.stopPropagation();
    this.setState({ modalIsOpen: false});
  }



  render() {
    const { barName, neighborhood, special, id, phoneNumber, address, website} = this.props;

    return (
      <div className="Card" onClick={this.openModal}>
        <h2 className="barName">{barName}</h2>
        <h5 className="neighborhood">Neighborhood: {neighborhood}</h5>
        <p className="special">
          {!special
            ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!"
            : special}
        </p>
        <p className="expand">click to see more</p>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <h1>{barName}</h1>
          <h3>{neighborhood}</h3>
          <p>{phoneNumber}</p>
          <p>{address}</p>
          <p><a href={!website ? "#" : website}>{!website ? "hmmm... no website?" : website}</a></p>
          <div id="buttonHolder">
            <button onClick={this.closeModal}>CLOSE</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Card;
