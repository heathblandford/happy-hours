import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date();
const dayOfTheWeek = days[date.getDay()];

const Header = (props) => {
    return (
        <div className="tc bg-navy pv3 yellow">
            <h1 className="bg-navy f1">Cincinnati Happy Hours!</h1>
            <p className="bg-navy pt4">The TOP Happy Hour Deals all over the city!</p>
            <p>Now showing deals for <span className="f4 white">{dayOfTheWeek}</span></p>
        </div>
    );
}


export default Header;