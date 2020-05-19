import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import Container from '../../container';
import Contents from '../Contents';
import { Header, ItemCard } from '../commons';
import ItemsContainer from '../ItemsContainer';
import { getAllProducts } from '../../redux/actions';

class Home extends Component {
  state = {
    isAuth: false,
    profile: {},
    products: [],
    loading: false,
  };

  UNSAFE_componentWillMount = () => {
    const { getAllProducts } = this.props;
    getAllProducts();
  };

  componentDidMount = () => {
    const {
      login: { profile, isAuth },
    } = this.props;
    this.setState({
      isAuth,
      profile,
    });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      login: { isAuth, message, errors, profile },
      allProducts: { loading, products },
    } = nextProps;

    this.setState({
      loading,
      isAuth,
      message,
      errors,
      profile,
      products,
    });
  };

  render() {
    const { profile, loading, isAuth, products } = this.state;
    return (
      <LazyLoad>
        <Container
          header={<Header profile={profile} isAuth={isAuth} />}
          content={
            <Contents
              isAuth={isAuth}
              contents={
                <ItemsContainer items={<ItemCard loading={loading} products={products} />} />
              }
            />
          }
        />
      </LazyLoad>
    );
  }
}

const mapStateToProps = ({ signin, allProducts }) => ({
  login: signin,
  allProducts,
});

export default connect(mapStateToProps, { getAllProducts })(Home);
