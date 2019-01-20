import React from 'react';
import '../Stylizers/card.css'

const Card = ({ barName, neighborhood, special, id }) => {
    return(
        <div className="Card">
        {/*<img src={`https://picsum.photos/300/?${id}`} alt="bar"/>*/}
            <h2 className="barName">{barName}</h2>
            <h5 className="neighborhood">Neighborhood: {neighborhood}</h5>
            <p className="special">{!special ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!" : special}</p>
        </div>
    )
}

export default Card;
