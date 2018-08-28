import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { barName, neighborhood, special, id } = this.props;
        let specialsMessage = "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!";

        return (
            <div className="tc bg-navy dib br3 pa0 ma3 w5 grow white">
                <img src={`https://picsum.photos/400/?${id}`} alt="bar"/>
                <div>
                    <h2 className="h3">{barName}</h2>
                    <h5>{neighborhood}</h5>
                    <p className="h4 ph3">{!special ? specialsMessage : special}</p>
                </div>
            </div>
        )

    }
}

export default Card;