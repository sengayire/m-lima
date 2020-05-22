import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import Container from '../../container';
import Contents from '../Contents';
import { Header, ItemCard } from '../commons';
import ItemsContainer from '../ItemsContainer';
import { getAllProducts, shoppingCartItems } from '../../redux/actions';

class Home extends Component {
  state = {
    isAuth: false,
    profile: {},
    products: [],
    loading: false,
  };

  UNSAFE_componentWillMount = () => {
    const { getAllProducts, profile, shoppingCartItems } = this.props;

    getAllProducts();
    return profile && shoppingCartItems(profile.orgID);
  };

  componentDidMount = () => {
    const {
      login: { profile, isAuth },
      history,
    } = this.props;

    if (isAuth) {
      const {
        authorities: [{ authority }],
      } = profile;
      console.log('athority', authority);
      // if (authority === 'INDIVIDUAL_SELLER' || 'COMPANY_SELLER' || 'COOPERATIVE_SELLER') {
      //   return history.push('/seller/dashboard');
      // }
    }
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
              profile={profile}
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

export default connect(mapStateToProps, { getAllProducts, shoppingCartItems })(Home);
