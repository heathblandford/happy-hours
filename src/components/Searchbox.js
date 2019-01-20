import React from 'react';
import '../Stylizers/searchbox.css';

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className="Searchbox">
            <input
                className="searchySearch"
                type="search"
                placeholder="Search Bars"
                onChange={searchChange}/>
        </div>
    );
}

export default Searchbox;