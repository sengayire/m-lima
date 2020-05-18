import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import MarketDemand from './MarketDemand';
import { SecurityInfo, PersonalInfo } from '../UserAccount';

class SellerDashboard extends Component {
  state = { profile: {}, isAuth: false };

  ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'orders' },
    { name: 'products' },
    { name: 'market demand' },
  ];

  componentDidMount() {
    const { profile, isAuth } = this.props;
    this.setState({ profile, isAuth });
  }

  manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'personal information':
        return <PersonalInfo />;
      case 'security information':
        return <SecurityInfo />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'market demand':
        return <MarketDemand />;
      default:
        return <Dashboard />;
    }
  };

  render() {
    const { profile, isAuth } = this.state;
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

const mapStateToProps = ({ signin: { profile, isAuth } }) => ({
  profile,
  isAuth,
});
export default connect(mapStateToProps, null)(SellerDashboard);
