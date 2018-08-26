import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { barName, number, neighborhood, id, special } = this.props;
        let specialsMessage = "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!";
        // let specialDay = '';
        // if(!{special}){
        //     specialDay = <p>"Looks like we don't have info on the happy hour special here. Send us a note to have it updated!"</p>;
        // } else {
        //     specialDay = {special};
        // }

        return (
            <div className="tc bg-navy dib br3 pa0 ma3 w-25 grow white">
                <img src={`https://picsum.photos/400/?${id}`} alt="bar"/>
                <div>
                    <h2>{barName}</h2>
                    <h5>{neighborhood}</h5>
                    <p className="h4">{!special ? specialsMessage : special}</p>
                    <p>{number}</p>
                </div>
            </div>
        )

    }
}

export default Card;