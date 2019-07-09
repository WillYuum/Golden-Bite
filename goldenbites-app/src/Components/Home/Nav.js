import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />

        <label for='navi-toggle' className='navigation__button'>
          <span className='navigation__icon' />
        </label>

        <div className='navigation__background' />

        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              {' '}
              <a href='#' className='navigation__link'>
                <span>01</span>Home
              </a>
            </li>
            <li className='navigation__item'>
              {' '}
              <a href='#' className='navigation__link'>
                <span>02</span>Products
              </a>
            </li>
            <li className='navigation__item'>
              {' '}
              <a href='#' className='navigation__link'>
                <span>03</span>Blogs
              </a>
            </li>
            <li className='navigation__item'>
              {' '}
              <a href='#' className='navigation__link'>
                <span>04</span>About Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
