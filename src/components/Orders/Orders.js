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
import { getAllOrders, deleteOrder } from '../../redux/actions';

class Orders extends Component {
  state = {
    isAuth: false,
    loading: false,
    profile: {},
    items: {},
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
      getAllOrders,
    } = this.props;
    this.setState({ loading, isAuth, profile });
    getAllOrders(profile.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    this.setState({ items: items[0] });
  }

  handleClick = (e, action, id) => {
    if (action === 'delete') {
      const { deleteOrder } = this.props;
      deleteOrder(id);
    }
  };

  manageMenu = (activeItem) => {
    const { items, loading } = this.state;
    switch (activeItem) {
      case 'all orders':
        return <AllOrders items={items} />;
      case 'awaiting shipment':
        return <AwaitingShipping items={items} />;
      case 'awaiting delivery':
        return <AwaitingDelivery items={items} />;
      case 'awaiting payment':
        return <AwaitingPayment items={items} />;
      case 'delivery':
        return <Delivery items={items} />;
      default:
        return <AllOrders loading={loading} handleClick={this.handleClick} items={items} />;
    }
  };

  render() {
    const { isAuth, profile } = this.state;
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
const mapStateToProps = ({ signin, orders: { items } }) => ({
  login: signin,
  items,
});

export default connect(mapStateToProps, { getAllOrders, deleteOrder })(Orders);
