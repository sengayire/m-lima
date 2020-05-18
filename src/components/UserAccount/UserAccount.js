import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';
import ShippingAddress from './ShippingAddress';
import SecurityInfo from './SecurityInfo';

class UserAccount extends Component {
  state = {
    profile: {},
    isAuth: false,
  };

  ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'my shipping address' },
  ];

  componentDidMount() {
    const { profile, isAuth } = this.props;
    this.setState({
      profile,
      isAuth,
    });
  }

  manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard name="ShoppingCart" />;
      case 'personal information':
        return <PersonalInformation />;
      case 'security information':
        return <SecurityInfo />;
      case 'my shipping address':
        return <ShippingAddress />;
      default:
        return <Dashboard />;
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
const mapStateToprops = ({ signin: { profile, isAuth } }) => ({
  profile,
  isAuth,
});

export default connect(mapStateToprops, null)(UserAccount);
