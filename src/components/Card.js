import React from 'react';

const Card = ({ barName, number, neighborhood, id }) => {
    return (
        <div className="tc bg-navy dib br3 pa0 ma3 grow white">
            <img src={`https://picsum.photos/400/?${id}`} alt="bar"/>
            <div>
                <h2>{barName}</h2>
                <h5>{neighborhood}</h5>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default Card;