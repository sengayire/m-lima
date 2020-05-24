import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const AwaitingShipping = ({ items, status }) => {
  return (
    <div>
      <h1>Awaiting shipping orders</h1>
      <OrderedItemCard itemStatus={status} items={items} />
    </div>
  );
};

export default AwaitingShipping;
