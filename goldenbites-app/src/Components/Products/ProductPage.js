import React from 'react';
import CategoryListing from './CategoryListing';
import ProductsListing from './ProductsListing';
import ProductHeader from './ProductHeader';
export default class ProductsPage extends React.Component {
  state = {
    category: ''
  };

  updateCat = category => {
    this.setState({ category });
  };

  emptyCat = () => {
    this.setState({ category: '' });
  };
  render() {
    return (
      <div>
        <ProductHeader />
        <CategoryListing all={this.emptyCat} a={this.updateCat} />
        <ProductsListing category={this.state.category} />
      </div>
    );
  }
}
