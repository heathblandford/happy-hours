import React from 'react';
import 'tachyons';

const Card = ({ name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa0 ma3 dim">
            <img src={`https://picsum.photos/200/?random`} alt="robofriend"/>
            <div>
                <h2>Bar Name</h2>
                <h5>Happy Hour Special</h5>
                <p>Click for More!</p>
            </div>
        </div>
    )
}

export default Card;