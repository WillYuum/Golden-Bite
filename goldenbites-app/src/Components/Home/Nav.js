import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const navButton = document.getElementById('navi-toggle');
const navLinks = document.querySelectorAll('.navigation__link');

Array.from(navLinks).forEach(link =>
  link.addEventListener('click', () => {
    navButton.checked = false;
  })
);

class Nav extends Component {
  state = { checked: false };
  updateNav = checked => {
    this.setState({ checked });
  };
  render() {
    return (
      <div className='navigation'>
        <input
          type='checkbox'
          checked={this.state.checked}
          className='navigation__checkbox'
          id='navi-toggle'
        />

        <label
          for='navi-toggle'
          className='navigation__button'
          onClick={() => {
            this.updateNav(!this.state.checked);
          }}
        >
          <span className='navigation__icon' />
        </label>

        <div className='navigation__background' />

        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              {' '}
              <Link
                className='navigation__link'
                onClick={() => {
                  this.updateNav(false);
                }}
                to='/'
              >
                01 Home
              </Link>
              {/* <a href='#' className='navigation__link'>
                <span>01</span>
              </a> */}
            </li>
            <li className='navigation__item'>
              {' '}
              <Link
                to='/products'
                onClick={() => {
                  this.updateNav(false);
                }}
                className='navigation__link'
              >
                <span>02</span> Products
              </Link>
            </li>
            <li className='navigation__item'>
              {' '}
              <Link
                to='/blogs'
                onClick={() => {
                  this.updateNav(false);
                }}
                className='navigation__link'
              >
                <span>03</span> Blogs
              </Link>
            </li>
            <li className='navigation__item'>
              {' '}
              <a href='/about' className='navigation__link'>
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
