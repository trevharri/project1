import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <h2>CryptoStop</h2>
          <p>Imaginary Lane 134 DK Almsed, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Imaginary Lane 134 DK Almsed</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      
      <div className="gpt3__footer-copyright">
        <p>© 2023 Crypto Stop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer