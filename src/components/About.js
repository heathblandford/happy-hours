import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Stylizers/about.css';

class About extends Component{
  render(){
    return(
      <div id='about'>
        <h1>Here's the Deal...</h1>
        <div>
          <p>You probably have a favorite spot to grab a drink in the city, and you probably 
            know the happy hour special there. But when it's time to try a new place, wouldn't 
            it be nice to know the deal there? 
          </p>
          <p>That's what Pour Decisions is all about. We've collected happy hour deals for 
            a bunch of awesome bars around the Cincinnati area and displayed them just for you. 
            See a deal that isn't right? Tell us. We don't have your favorite place? Add it!
            The more deals the better.
          </p>
        </div>
        <Link to='/'>
          <button className='about-button'>Home</button>
        </Link>
        <Link to='/deals'>
          <button className='router about-button'>Deals</button>
        </Link>
        <Link to='/contact'>
          <button className='router about-button'>Contact Us</button>
        </Link>
      </div>
    )
  }
}

export default About;