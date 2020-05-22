import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const AwaitingPayment = ({ items }) => (
  <div>
    <div>
      <h1>Awaiting payment orders</h1>
    </div>
    <OrderedItemCard items={items} />
  </div>
);

export default AwaitingPayment;
