import React, { Component } from 'react';
import './SellerDashboard.scss';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';
import NewProduct from './NewProduct';
import { sellerProducts } from '../../redux/actions';

class Products extends Component {
  state = { loading: false };

  UNSAFE_componentWillMount() {
    const {
      profile: { orgID },
      allProducts,
    } = this.props;
    allProducts({ orgID });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { products, loading } = nextProps;
    this.setState({ products, loading });
  }

  handleClick = (e) => {
    this.setState({ action: e });
  };

  render() {
    const { action, products, loading } = this.state;
    console.log('loading products', loading);

    return (
      <div className="seller-dashboard-container">
        {action === 'newProduct' ? (
          <NewProduct />
        ) : (
          <AllProducts products={products} loading={loading} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ signin: { profile }, seller: { products, loading } }) => ({
  profile,
  products,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  allProducts: (payload) => dispatch(sellerProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
