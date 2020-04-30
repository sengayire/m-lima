import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import Products from './Products';


const SellerDashboard = () => {
  const manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'dashboard': return <Dashboard />;
      case 'personal information': return <div>again ger</div>;
      case 'security information': return <div>Security information</div>;
      case 'orders': return <div>hello here</div>;
      case 'products': return <Products />;
      case 'market demand': return <Dashboard />;
      default: return <Dashboard />;
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
  return (<Container
  header={<Header/>}
  content={<DashboardContainer menuItems={ordersMenuItems} manageMenu={manageMenu}/>}
/>);
};

export default SellerDashboard;
