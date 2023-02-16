import React from 'react';
import NavBar from '../../components/NavBar';
import './Contact.css';

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h3 className="title">Contact Us</h3>
        <p className="description">Please fill this form</p>

        <div className="contact-form-container">
          <div className="field-container">
            <span>First name</span>
            <input id="form-name" type="text" />
          </div>

          <div className="field-container">
            <span>E mail</span>
            <input id="form-email" type="text" />
          </div>

          <div className="field-container">
            <span>Message</span>
            <textarea id="form-message" rows="10" type="text" />
          </div>

          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
