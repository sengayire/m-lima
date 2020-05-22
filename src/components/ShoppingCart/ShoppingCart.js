import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../container';
import { Header } from '../commons';
import Contents from '../Contents';
import CartItems from './CartItems';
import { shoppingCartItems } from '../../redux/actions';

class ShoppingCart extends Component {
  state = { isAuth: false, profile: {}, cartItems: {} };

  componentDidMount() {
    const { profile, isAuth, shoppingCartItems } = this.props;
    this.setState({ profile, isAuth });
    shoppingCartItems(profile.orgID);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      data: { result },
    } = nextProps;
    this.setState({ cartItems: result[0] });
  }

  render() {
    const { profile, isAuth, cartItems } = this.state;

    return (
      <Container
        header={<Header profile={profile} isAuth={isAuth} />}
        content={<Contents isAuth={isAuth} contents={<CartItems items={cartItems} />} />}
      />
    );
  }
}
const mapStateToprops = ({
  signin: { profile, isAuth },
  shoppingCartItems: {
    items: { data },
  },
}) => ({
  profile,
  isAuth,
  data,
});

export default connect(mapStateToprops, { shoppingCartItems })(ShoppingCart);
