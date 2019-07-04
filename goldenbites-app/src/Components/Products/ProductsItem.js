import React from "react";

export default class ProductsItem extends React.Component {
  render() {
    return (
      <div className="ProductsItem-container">
        <div className="ProductsItem-image">
          
        </div>
        <div className="ProductsItem-details">
          <p className = "ProductsItem-Text">{this.props.name}</p>
          <div className = "ProductsItem-BellowTitle">
            <p className = "ProductsItem-info "><b>${this.props.price}</b></p>
            <p className = "ProductsItem-info">ADD TO CART</p>
          </div>
        </div>
      </div>
    );
  }
}
