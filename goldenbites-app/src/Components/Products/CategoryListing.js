import React from 'react';

import './Style/Products.css';

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
      <div className='CategoryListing-container'>
        <div className='CategoryListing-lists'>
          <CategoryItem
            all_button={this.props.all}
            b={this.props.a}
            categoryType={'All'}
          />

          {this.state.data_Categories.map(category => {
            return (
              <CategoryItem
                categoryType={category.categories_name}
                b={this.props.a}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
