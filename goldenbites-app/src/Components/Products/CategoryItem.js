import React from "react";

import "./Style/Products.css"

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div className="CategoryItem-container">
        <li className = "CategoryItem-mainList">{this.props.a}</li>
      </div>
    );
  }
}
