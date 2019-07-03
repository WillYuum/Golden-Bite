import React from 'react';

export default class CategoryItem extends React.Component{
    
    render(){
        return(
            <div className = "CategoryItem-container">
                <li>{this.props.category}</li>
            </div>
        );
    }
}