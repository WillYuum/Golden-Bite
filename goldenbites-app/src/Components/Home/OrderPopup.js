import React, { Component } from 'react';
import './orderPopup.css';

class OrderPopup extends Component {
  state = {};
  render() {
    return (
      <div className='popUp' id={`${this.props.ali}`} >
        <div className='popUp__content'>
          <a className='popUp__close' href='#bestSellers'>
            &times;
          </a>
          <div className='popUp__content--product'>
            <div className='popUp__content--product-details'>
              <div className='popUp__content--product-details-name'>
                {this.props.productName}
              </div>
              <div className='popUp__content--product-details-price'>
                $ {this.props.productPrice}
              </div>
              <div className='popUp__content--product-details-category'>
                Category: {this.props.productCat}
              </div>
            </div>
            <div className='popUp__content--product-image' />
          </div>
          <div className='popUp__content--product-details-description'>
            {this.props.productDiscription}
          </div>
          <div className='popUp__content--client'>
            <input
              className='input--box'
              type='text'
<<<<<<< HEAD
              placeholder='Enter your Name'
=======
              name="name"
              placeholder='Name'
              value = {this.props.UserName}
              onChange = {this.props.handleChange}
>>>>>>> a6a5c1b72e2e39472a945494a01bf7c315808b3c
              autoFocus
              required
            />
            <input
              className='input--box'
              type='email'
<<<<<<< HEAD
              placeholder='Enter your Email'
=======
              name="email"
              placeholder='Email'
              value = {this.props.UserEmail}
              onChange = {this.props.handleChange}
>>>>>>> a6a5c1b72e2e39472a945494a01bf7c315808b3c
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
<<<<<<< HEAD
              placeholder='Enter your Phone'
=======
              name="phone"
              placeholder='Phone'
              value = {this.props.UserPhone}
              onChange = {this.props.handleChange}
>>>>>>> a6a5c1b72e2e39472a945494a01bf7c315808b3c
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
<<<<<<< HEAD
              placeholder='Enter your Address'
=======
              name="address"
              placeholder='Address'
              value = {this.props.UserAddress}
              onChange = {this.props.handleChange}
>>>>>>> a6a5c1b72e2e39472a945494a01bf7c315808b3c
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
            <button className='order--button' type='submit' onClick = {this.props.handlingSubmit}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPopup;
