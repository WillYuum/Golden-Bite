import React from "react";

import CategoryListing from "./CategoryListing"
import ProductsListing from "./ProductsListing"
export default class ProductsPage extends React.Component{
    state = {
        category:''
    }
    updateCat = (category) =>
    {
        this.setState({category});
        console.log(this.state.cat)
    }
    render(){
        return(
            <div>
                <CategoryListing a={this.updateCat} />
                <ProductsListing category={this.s} />
            </div>
        );
    }

}