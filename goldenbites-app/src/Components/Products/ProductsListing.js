import React from "react";
import ProductsItem from "./ProductsItem";
import "./Style/Products.css";

export default class ProductsListing extends React.Component {
  state = {
    data_Products: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3001/products/read");
      const products = await response.json();
      await this.setState({ data_Products: products.DATA });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.props.category)
    return (
      <div className="ProductsListing-container">

        {this.state.data_Products.map(product => {
          if(product.categories_name === this.props.category)
         return(
            <ProductsItem
              name={product.products_name}
              price={product.products_price}
              img={product.products_image}
              discription={product.products_description}
              category={product.categories_name}
            />
         );
         if(this.props.category === "")
         return(
          <ProductsItem
            name={product.products_name}
            price={product.products_price}
            img={product.products_image}
            discription={product.products_description}
            category={product.categories_name}
          />
       );
        
        })}
      </div>
    );
  }
}
