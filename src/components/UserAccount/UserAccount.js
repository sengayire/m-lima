import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';
import ShippingAddress from './ShippingAddress';
import SecurityInfo from './SecurityInfo';

const UserAccount = () => {
  const manageMenu = (activeItem) => {
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
  const ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'my shipping address' },
  ];
  return (
    <Container
      header={<Header isAuth />}
      content={<DashboardContainer menuItems={ordersMenuItems} manageMenu={manageMenu} />}
    />
  );
};

export default UserAccount;
