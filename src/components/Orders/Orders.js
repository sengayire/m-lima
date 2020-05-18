import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import AllOrders from './AllOrders';
import AwaitingShipping from './AwaitingShipping';
import AwaitingDelivery from './AwaitingDelivery';
import AwaitingPayment from './AwaitingPayment';
import Delivery from './Delivery';

class Orders extends Component {
  state = {
    isAuth: false,
    loading: false,
    profile: {},
  };

  ordersMenuItems = [
    { name: 'all orders' },
    { name: 'awaiting shipment' },
    { name: 'awaiting delivery' },
    { name: 'awaiting payment' },
    { name: 'delivery' },
  ];

  componentDidMount() {
    const {
      login: { loading, isAuth, profile },
    } = this.props;
    console.log('mounted', isAuth, profile);

    this.setState({ loading, isAuth, profile });
  }

  manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'all orders':
        return <AllOrders />;
      case 'awaiting shipment':
        return <AwaitingShipping />;
      case 'awaiting delivery':
        return <AwaitingDelivery />;
      case 'awaiting payment':
        return <AwaitingPayment />;
      case 'delivery':
        return <Delivery />;
      default:
        return <AllOrders />;
    }
  };

  render() {
    const { loading, isAuth, profile } = this.state;
    console.log('props', isAuth, profile);
    return (
      <Container
        header={<Header isAuth={isAuth} profile={profile} />}
        content={
          <DashboardContainer menuItems={this.ordersMenuItems} manageMenu={this.manageMenu} />
        }
      />
    );
  }
}
const mapStateToProps = ({ signin }) => ({
  login: signin,
});

// const mapDispatchToProps = (dispatch) => ({
//   activeLogin: (payload) => dispatch(signin(payload)),
// });

export default connect(mapStateToProps, null)(Orders);
