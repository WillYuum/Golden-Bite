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
    }

    emptyCat = ()=>{
        this.setState({category:""})
    }
    render(){
        return(
            <div>
                <CategoryListing all={this.emptyCat} a={this.updateCat} />
                <ProductsListing category={this.state.category} />
            </div>
        );
    }

}