import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='contact-info'>
        <h4>Contact Us</h4>
        <p>123 Main St, Anytown, USA 12345</p>
        <p>(123) 456-7890</p>
        <p>info@example.com</p>
      </div>
      <div className='social-media-links'>
        <h4>Follow Us</h4>
        <ul>
          <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
          <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;