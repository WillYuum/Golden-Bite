import React from 'react';
import './Style/PopUpModel.css';

import OrderPopUp from '../Home/OrderPopup';
export default class ProductsItem extends React.Component {
 state={
   
 }

  render() {
    const { name, email, phone_number, address } = this.state;
    return (
      <div className='product__container'>
        <div
          className='product__picture'
          style={{
            backgroundImage: `url(\"http://localhost:3001/Golden_Bites_Images/${
              this.props.img
            }\")`
          }}
        >
        </div>

        <div className='product__details'>
          <div className='product__details--name'>{this.props.name}</div>

          <div className='product__details--box'>
            <div className='product__details--price'>${this.props.price}</div>
            <div className='product__details--buy'>
              <a href={`#${this.props.name}`}>BUY NOW</a>
            </div>
          </div>
        </div>
        {/*-----------------------------------------POPUP-----------------------------------------------------*/}
        <OrderPopUp
          id={this.props.name}
          popUpImg = {this.props.img}
          productName={this.props.name}
          productPrice={this.props.price}
          productCat={this.props.category}
          productDiscription={this.props.discription}
          UserName={name}
          UserEmail={email}
          UserPhone={phone_number}
          UserAddress={address}
          handleChange={this.changeHandler}
          handlingSubmit={this.submitHandler}
        />

        {/* <div id={`${this.props.name}`} className='ProductsItem-overlay'>
          <div className='ProductsItem-content'>
            <a href='#' className='ProductsItem-close'>
              &times;
            </a>
            <div className='ProductsItem-MainDetails'>
              <div className='ProductsItem-popupImage'>
                <img
                  width='300px'
                  height='250px'
                  src={`http://localhost:3001/Golden_Bites_Images/${
                    this.props.img
                  }.jpg`}
                  alt=''
                />
              </div>

              <p className='ProductsItem-productname'>{this.props.name}</p>
              <p className='ProductsItem-productprice'>
                <b>${this.props.price}</b>
              </p>
              <p className='Productsitem-productCategory'>
                Categories: {this.props.category}
              </p>
              <p className='ProductsItem-productdescription'>
                {this.props.discription}
              </p>
            </div>
            <div className='ProductsItem-form'>
              <form onSubmit={this.submitHandler}>
                <input
                  className='ProductsItem-Name'
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className='ProductsItem-email'
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className='ProductsItem-phone'
                  type='text'
                  placeholder='Phone-Number'
                  name='phone'
                  value={phone_number}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className='ProductsItem-address'
                  type='text'
                  placeholder='Address'
                  name='address'
                  value={address}
                  onChange={this.changeHandler}
                  required
                />
              </form>
            </div>
            <div className='ProductsItem-btn-bg'>
              <button className='Productsitem-btn' onClick={this.submitHandler}>
                BUY
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
