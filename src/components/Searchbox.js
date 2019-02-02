import React from 'react';
import '../Stylizers/searchbox.css';

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className="Searchbox">
            <input
                type="search"
                placeholder="Search Bars"
                onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;