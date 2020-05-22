import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const AwaitingDelivery = ({ items }) => (
  <div>
    <div>
      <h1>Awaiting delivery orders</h1>
    </div>
    <OrderedItemCard items={items} />
  </div>
);

export default AwaitingDelivery;
