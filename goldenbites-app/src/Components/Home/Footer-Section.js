import React, { Component } from 'react';
import './footer-section.css';
import logo from '../../Assets/img/logo.png';

class FooterSection extends Component {
  state = {};
  render() {
    return (
      <div id='footer'>
        <div className='footer__container'>
          <div className='footer__logo'>
            <img src={logo} alt='Golden Bites Logo' />
          </div>
          <div className='footer__line' />
          <div className='footer__details'>
            <div>Beirut, Lebanon</div>
            <div>+961 3 770421</div>
            <div>info@goldenbites.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection;
