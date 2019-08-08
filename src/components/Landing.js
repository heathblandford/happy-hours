import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Stylizers/landing.css';

class Landing extends Component{
  render(){
    return(
      <div className='main'>
        <h1>Pour Decisions</h1>
        <h5>All of the Best Happy Hour Deals</h5>
        <Link to="/deals">
          <button>See Deals</button>
        </Link>

        <p>Photo by Adam Wilson on Unsplash</p>
      </div>
    )
  }
}

export default Landing;