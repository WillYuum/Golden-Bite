import React, { Component } from 'react';
import './hero.css';
import logo from '../../Assets/img/logo.png';

class Hero extends Component {
  state = {};
  render() {
    return (
      <div id='home'>
        <div className='heroSlider'>
          <figure className='slide1' />
          <figure className='slide2' />
          <figure className='slide3' />
          <figure className='slide4' />
        </div>

        <div className='heroBox'>
          <div className='logoBox'>
            <img src={logo} alt='Golden Bites Logo' />
          </div>
          <div className='sloganBox'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil nemo
            ipsa, itaque qui molestias laborum dignissimos.
          </div>
          <div className='heroButton'>
            <a href='#'>VIEW OUR PRODUCTS</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
