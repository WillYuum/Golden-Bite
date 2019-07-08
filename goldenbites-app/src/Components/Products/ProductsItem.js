import React from "react";
import "./Style/PopUpModel.css";


export default class ProductsItem extends React.Component {
  render() {
    return (
      <div className="ProductsItem-container">
        <div
          className="ProductsItem-image"
          style={{
            backgroundImage: `url(\"http://localhost:3001/Golden_Bites_Images/${this.props.img}.jpg\")`,
            backgroundSize: "100% 100%"
          }}
        />

        <div className="ProductsItem-details">
          <p className="ProductsItem-Text">{this.props.name}</p>

          <div className="ProductsItem-BellowTitle">
            <p className="ProductsItem-info ">
              <b>${this.props.price}</b>
            </p>
            <div className="ProductsItem-info addToCart">
              <a href={`#${this.props.name}`}>
                <p className="ProductsItem-text">ADD TO CART</p>
              </a>
            </div>
          </div>
        </div>
        {/*-----------------------------------------POPUP-----------------------------------------------------*/}
        <div id={`${this.props.name}`} className="ProductsItem-overlay">
          <div className="ProductsItem-content">
            <a href="#" className="ProductsItem-close">
              &times;
            </a>
            <div className="ProductsItem-MainDetails">


            <div className = "ProductsItem-popupImage">
              <img src={`http://localhost:3001/Golden_Bites_Images/${this.props.img}.jpg`} alt=""/>
            </div>
              
              <p className="ProductsItem-productname">{this.props.name}</p>
              <p className="ProductsItem-productprice">${this.props.price}</p>
              <p className="Productsitem-productCategory">
                Categories:{this.props.category}
              </p>
              <p className="ProductsItem-productdescription">
                {this.props.discription}
              </p>
              
            </div>
            <div className="ProductsItem-form">
              <form action="">
                <input className="ProductsItem-Name" type="text" placeholder = "Name"  required />
                <input className="ProductsItem-email" type="text" placeholder = "Email" required />
                <input className="ProductsItem-phone" type="text" placeholder = "Phone-Number" required />
                <input className="ProductsItem-address" type="text" placeholder = "Address" required />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
