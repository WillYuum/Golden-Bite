import React from "react";

import "./Style/Products.css"

export default class CategoryItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="CategoryItem-container">
        <a onClick = {this.props.all_button}><li className = "CategoryItem-mainList" onClick={()=>this.props.b(this.props.categoryType)}>{this.props.categoryType}</li></a>
      </div>
    );
  }
}
