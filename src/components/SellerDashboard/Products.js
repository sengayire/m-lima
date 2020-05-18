import React, { Component } from 'react';
import './SellerDashboard.scss';
import AllProducts from './AllProducts';
import NewProduct from './NewProduct';

class Products extends Component {
  state = {};

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('nextPrps', nextProps);
  }

  handleClick = (e) => {
    console.log('event', e);

    this.setState({ action: e });
  };

  render() {
    const { action } = this.state;
    return (
      <div className="seller-dashboard-container">
        {action === 'newProduct' ? <NewProduct /> : <AllProducts handleClick={this.handleClick} />}
      </div>
    );
  }
}

export default Products;
