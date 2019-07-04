import React from "react";

import CategoryListing from "./CategoryListing"
import ProductsListing from "./ProductsListing"
export default class ProductsPage extends React.Component{

    render(){
        return(
            <div>
                <CategoryListing />
                <ProductsListing />
            </div>
        );
    }

}