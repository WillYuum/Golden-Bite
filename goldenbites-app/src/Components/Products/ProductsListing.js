import React from "react";
import ProductsItem from "./ProductsItem"
import "./Style/Products.css";

export default class ProductsListing extends React.Component{

    state = {
        data_Products: []
    }

    async componentDidMount(){
        try{
          const response  = await fetch("http://localhost:3001/products/read");
          const products = await response.json()
          console.log(products.DATA)
          await this.setState({data_Products:products.DATA})
          await console.log("DATA =>" ,this.state.data.DATA)
        }catch(err){
          console.log(err)
        }
      }

    render(){
        return(
            <div className = "ProductsListing-container">
                {
                    this.state.data_Products.map(product =>{
                        return <ProductsItem image = {product.products_image}name = {product.products_name} price={product.products_price}/>
                    })
                }
            </div>
        );
    }
}