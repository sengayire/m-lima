import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import MarketDemand from './MarketDemand';
import { SecurityInfo, PersonalInfo } from '../UserAccount';

const SellerDashboard = () => {
  const manageMenu = (activeItem) => {
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
  const ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'orders' },
    { name: 'products' },
    { name: 'market demand' },
  ];
  return (
    <Container
      header={<Header isAuth />}
      content={<DashboardContainer menuItems={ordersMenuItems} manageMenu={manageMenu} />}
    />
  );
};

export default SellerDashboard;
