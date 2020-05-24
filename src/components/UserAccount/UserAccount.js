import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';
import ShippingAddress from './ShippingAddress';
import SecurityInfo from './SecurityInfo';
import { getAllOrders } from '../../redux/actions';

class UserAccount extends Component {
  state = {
    profile: {},
    isAuth: false,
    items: {},
  };

  ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'my shipping address' },
  ];

  componentDidMount() {
    const { profile, isAuth, getAllOrders } = this.props;
    getAllOrders();
    this.setState({
      profile,
      isAuth,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    this.setState({ items });
  }

  manageMenu = (activeItem) => {
    const { items, profile } = this.state;
    console.log('profile', profile);

    switch (activeItem) {
      case 'dashboard':
        return <Dashboard profile={profile} name="ShoppingCart" items={items[0]} />;
      case 'personal information':
        return <PersonalInformation />;
      case 'security information':
        return <SecurityInfo />;
      case 'my shipping address':
        return <ShippingAddress />;
      default:
        return <Dashboard items={items[0]} profile={profile} />;
    }
  };

  render() {
    const { profile, isAuth } = this.state;

    return (
      <Container
        header={<Header profile={profile} isAuth={isAuth} />}
        content={
          <DashboardContainer menuItems={this.ordersMenuItems} manageMenu={this.manageMenu} />
        }
      />
    );
  }
}
const mapStateToprops = ({ signin: { profile, isAuth }, orders: { items } }) => ({
  profile,
  isAuth,
  items,
});

export default connect(mapStateToprops, { getAllOrders })(UserAccount);
