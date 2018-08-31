import React from 'react';

const Card = ({ barName, neighborhood, special, id }) => {
    return(
        <div className="tc bg-navy br3 pa0 dib mw5 ma3 grow white outline">
        {/*<img src={`https://picsum.photos/300/?${id}`} alt="bar"/>*/}
            <h2 className="f4 h3">{barName}</h2>
            <h5>Neighborhood: {neighborhood}</h5>
            <p className="f6 pa3 h4">{!special ? "Looks like we don't have info on the happy hour special here. Send us a note to have it updated!" : special}</p>
        </div>
    )
}

export default Card;
