import React from 'react';
import '../Stylizers/header.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const date = new Date();
const dayOfTheWeek = days[date.getDay()];

const Header = (props) => {
    return (
        <div className="header">
            <h1 className="title">Cincinnati Happy Hours!</h1>
            <p className="slogan">The TOP Happy Hour Deals all over the city!</p>
            <p className="deals">Now showing deals for <span className="dayOfTheWeek">{dayOfTheWeek}</span></p>
        </div>
    );
}


export default Header;