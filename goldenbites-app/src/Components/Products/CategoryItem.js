import React from "react";

import "./Style/Products.css"

export default class CategoryItem extends React.Component {
  render() {
    return (
      <div className="CategoryItem-container">
        <li className = "CategoryItem-mainList" onClick={()=>this.props.b(this.props.a)}>{this.props.a}</li>
      </div>
    );
  }
}
