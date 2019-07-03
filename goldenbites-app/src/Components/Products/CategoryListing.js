import React from 'react';

import CategoryItem from "./CategoryItem"

export default class CategoryListing extends React.Component{
    
    render(){
        return(
            <div className = "CategoryListing-container">
                <CategoryItem item = {this.props.categoryItem}/>
            </div>
        );
    }
}