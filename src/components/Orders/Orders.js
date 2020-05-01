import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import AllOrders from './AllOrders';

const Orders = () => {
  const manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'all orders': return <AllOrders />;
      case 'awaiting shipment': return <div>shipment here</div>;
      case 'awaiting delivery': return <div>awaiting delivery</div>;
      case 'awaiting payment': return <div>awaiting payment</div>;
      case 'delivery': return <div>awaiting delivery</div>;
      default: return <AllOrders />;
    }
  };
  const ordersMenuItems = [
    { name: 'all orders' },
    { name: 'awaiting shipment' },
    { name: 'awaiting delivery' },
    { name: 'awaiting payment' },
    { name: 'delivery' },
  ];
  return (<Container
  header={<Header isAuth={true}/>}
  content={<DashboardContainer menuItems={ordersMenuItems} manageMenu={manageMenu}/>}
/>);
};

export default Orders;
