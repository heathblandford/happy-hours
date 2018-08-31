import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className="pa2 dib tc">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Bars"
                onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;