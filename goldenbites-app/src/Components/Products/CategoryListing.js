import React from 'react';

import './Style/Category.css';

import CategoryItem from './CategoryItem';

export default class CategoryListing extends React.Component {
  state = {
    data_Categories: []
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3001/category/read');
      const categories = await response.json();
      await this.setState({ data_Categories: categories.DATA });
      await console.log('DATA =>', this.state.data_Categories);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="CategoryListing-container">
        <div className = "CategoryListing-lists">
          <CategoryItem a = "All" b={this.props.a} all_button={this.props.all}/>
        {
            this.state.data_Categories.map(category =>{
                return <CategoryItem a = {category.categories_name} b={this.props.a}/>
            })
        }
=======
      <div className='CategoryListing-container'>
        <div className='CategoryListing-lists'>
          <CategoryItem a='All' all_button={this.props.all} />
          {this.state.data_Categories.map(category => {
            return (
              <CategoryItem a={category.categories_name} b={this.props.a} />
            );
          })}
>>>>>>> 33bcad0b0788e4e66840f22c342a13391376554a
        </div>
      </div>
    );
  }
}
