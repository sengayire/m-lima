import React from 'react';
import { PaymentMsg, PlaceOrder } from '../commons';
import DeliveryInfo from '../DeliveryInfo';

const ManageModels = ({ eventName, onClick }) => {
  if (eventName === 'placeOrder') {
    return <PaymentMsg onClick={onClick}/>;
  }
  if (eventName === 'deliverInfo') {
    return <DeliveryInfo onClick={onClick}/>;
  }
  return <PlaceOrder onClick={onClick} />;
};

export default ManageModels;
