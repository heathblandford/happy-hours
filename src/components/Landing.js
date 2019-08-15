import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Stylizers/landing.css';

class Landing extends Component{
  render(){
    const imgURL = require(`../../public/adam-wilson-6UIonphZA5o-unsplash-smol.jpg`);
    return(
      <div className='main' style={{backgroundImage: `url(${imgURL})`}}>
        <h1 className="title-baby">Pour Decisions</h1>
        <h5 className="slogan">All of the Best Happy Hour Deals</h5>
        <div className="see-deal">
          <Link to="/deals">
            <button className="btn btn-deals">See Deals</button>
          </Link>
        </div>
        <div className='links'>
          <Link to="/add-a-deal">
            <button className="btn">Quick Add a Deal</button>
          </Link>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
          <Link to="/about">
            <button className="btn">About Us</button>
          </Link>
        </div>

      </div>
    )
  }
}

export default Landing;