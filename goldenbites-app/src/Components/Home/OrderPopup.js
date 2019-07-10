import React, { Component } from 'react';
import './orderPopup.css';

class OrderPopup extends Component {
  state = {};
  render() {
    return (
      <div className='popUp' id='popUp'>
        <div className='popUp__content'>
          <a className='popUp__close' href='#bestSellers'>
            &times;
          </a>
          <div className='popUp__content--product'>
            <div className='popUp__content--product-details'>
              <div className='popUp__content--product-details-name'>
                Cherry Pie
              </div>
              <div className='popUp__content--product-details-price'>
                $16.00
              </div>
              <div className='popUp__content--product-details-category'>
                Category: Pie
              </div>
            </div>
            <div className='popUp__content--product-image' />
          </div>
          <div className='popUp__content--product-details-description'>
            Lorem Ipsum is simply dummy text of the printing industry. Lorem
            Ipsum is simply dummy text of the printing industry. Lorem Ipsum is
            simply dummy text of the printing industry.
          </div>
          <div className='popUp__content--client'>
            <input
              className='input--box'
              type='text'
              placeholder='Name'
              autoFocus
              required
            />
            <input
              className='input--box'
              type='email'
              placeholder='Email'
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
              placeholder='Phone'
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
              placeholder='Address'
              autoFocus
              required
            />
          </div>
          <div className='popUp__content--order'>
            <input
              className='input--text'
              type='number'
              step='1'
              min='1'
              max=''
              inputMode='numeric'
              placeholder='Qty'
            />
            <button className='order--button' type='submit'>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPopup;
