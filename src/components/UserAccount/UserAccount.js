import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';

const UserAccount = () => {
  const manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'dashboard': return <Dashboard name='ShoppingCart'/>;
      case 'personal information': return <PersonalInformation />;
      case 'security information': return <div>Security information</div>;
      case 'my shipping address': return <div>My Shipping address</div>;
      default: return <Dashboard />;
    }
  };
  const ordersMenuItems = [
    { name: 'dashboard' },
    { name: 'personal information' },
    { name: 'security information' },
    { name: 'my shipping address' },
  ];
  return (<Container
  header={<Header isAuth={true}/>}
  content={<DashboardContainer menuItems={ordersMenuItems} manageMenu={manageMenu}/>}
/>);
};

export default UserAccount;
