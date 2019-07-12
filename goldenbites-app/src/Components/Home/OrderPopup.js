import React, { Component } from 'react';
import './orderPopup.css';

class OrderPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  }
  createOrder = async () => {
    let order = {
      products_id: this.props.productName,
      quantity: 5
    };
    console.log(order);

    try {
      const Order = await fetch(
        'http://localhost:3001/orders_products/create',
        {
          method: 'POST',
          body: JSON.stringify(order),
          headers: { 'Content-Type': 'application/json' }
        }
      );
      
    } catch (err) {
      console.log(err);
    }
    
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    console.log(this.state);
    const order = fetch('http://localhost:3001/orders/create', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    this.createOrder();
  };



  render() {
    
    return (
      <div className='popUp' id={`${this.props.id}`}>
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
            <div className='popUp__content--product-image' style={{
            backgroundImage: `url(\"http://localhost:3001/Golden_Bites_Images/${
              this.props.popUpImg
            }\")`
          }} />
          </div>
          <div className='popUp__content--product-details-description'>
            {this.props.productDiscription}
          </div>
          <div className='popUp__content--client'>
            <input
              className='input--box'
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.changeHandler}
              autoFocus
              required
            />
            <input
              className='input--box'
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.changeHandler}
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
              name='phone'
              placeholder='Phone'
              value={this.state.phone_number}
              onChange={this.changeHandler}
              autoFocus
              required
            />
            <input
              className='input--box'
              type='text'
              name='address'
              placeholder='Address'
              value={this.state.address}
              onChange={this.changeHandler}
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
            <button
              className='order--button'
              type='submit'
              onClick={this.submitHandler}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPopup;
