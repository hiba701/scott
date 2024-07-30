import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer" className="text-center">
      <div className="container co">
        <div className="socials-media text-center">
          <ul className="list-unstyled">
            <li>
              <a href="#"><i className="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <p className='f-text'>&copy; Copyrights Scott. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
