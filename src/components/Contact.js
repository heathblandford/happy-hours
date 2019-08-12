import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Stylizers/contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form
          // action="/success"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" required placeholder="Name" />
          <br />
          <input type="email" name="email" required placeholder="Email" />
          <br />
          <textarea name="message" required placeholder="Message" />
          <br />
          <button type="submit">Yell at us!</button>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Contact;
