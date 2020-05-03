import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import AllOrders from './AllOrders';
import AwaitingShipping from './AwaitingShipping';
import AwaitingDelivery from './AwaitingDelivery';
import AwaitingPayment from './AwaitingPayment';
import Delivery from './Delivery';

const Orders = () => {
  const manageMenu = (activeItem) => {
    switch (activeItem) {
      case 'all orders': return <AllOrders />;
      case 'awaiting shipment': return <AwaitingShipping />;
      case 'awaiting delivery': return <AwaitingDelivery />;
      case 'awaiting payment': return <AwaitingPayment />;
      case 'delivery': return <Delivery />;
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
