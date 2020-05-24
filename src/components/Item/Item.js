import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../container';
import { Header } from '../commons';
import Contents from '../Contents';
import ItemDetails from '../ItemDetails';
import { addToCart, buyItem, createAgency } from '../../redux/actions';

class Item extends Component {
  state = {
    profile: {},
    product: {},
    isAuth: false,
    loading: false,
    items: [],
    eventName: '',
  };

  UNSAFE_componentWillMount() {
    const {
      history: {
        location: {
          state: { product },
        },
      },
      profile,
      isAuth,
    } = this.props;

    this.setState({
      profile,
      product,
      isAuth,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { loading, items } = nextProps;
    const orderInfo = items && items.orderDetails[0].orderInfo;
    const { buyItem } = this.props;
    const {
      profile,
      product: { id, seller },
      eventName,
    } = this.state;
    const buyForm = {
      item: id,
      quantity: 5,
      seller: seller.id,
      userId: profile.id,
      orderInfo,
    };
    this.setState({
      loading,
    });
    return (
      eventName && eventName === 'buyItem' && items && Object.keys(items).length && buyItem(buyForm)
    );
  }

  handleClick = (e) => {
    const { addToCart } = this.props;
    const {
      product: { id, seller },
      profile,
    } = this.state;
    const form = {
      buyer: profile.orgID,
      deliveryAddress: 470,
      orderDetails: [
        {
          item: id,
          quantity: 5,
          seller: seller.id,
          userId: profile.id,
        },
      ],
      shippingTarrif: 469,
      status: 'SHOPPING',
    };
    this.setState({ form, eventName: e.target.id });

    return addToCart(form);
  };

  render() {
    const { profile, product, isAuth, loading } = this.state;

    return (
      <Container
        header={<Header isAuth={isAuth} profile={profile} />}
        content={
          <Contents
            isAuth={isAuth}
            contents={
              <ItemDetails loading={loading} product={product} handleClick={this.handleClick} />
            }
          />
        }
      />
    );
  }
}
const mapStateToProps = ({ signin: { profile, isAuth }, addToCart: { loading, items } }) => ({
  profile,
  isAuth,
  loading,
  items,
});

export default connect(mapStateToProps, { addToCart, buyItem, createAgency })(Item);
