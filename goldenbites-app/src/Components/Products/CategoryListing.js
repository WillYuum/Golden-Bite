import React from "react";

import "./Style/Category.css";

import CategoryItem from "./CategoryItem";

export default class CategoryListing extends React.Component {
    state ={
        data_Categories: []
      }
    
    
    
    async componentDidMount(){
        try{
          const response  = await fetch("http://localhost:3001/category/read");
          const categories = await response.json()
          await this.setState({data_Categories:categories.DATA})
          await console.log("DATA =>" ,this.state.data_Categories)
        }catch(err){
          console.log(err)
        }
      }

    

  render() {
    return (
      <div className="CategoryListing-container">
        <div className = "CategoryListing-lists">
        {
            this.state.data_Categories.map(category =>{
                return <CategoryItem a = {category.categories_name}/>
            })
        }
        </div>

        
      </div>
    );
  }
}
