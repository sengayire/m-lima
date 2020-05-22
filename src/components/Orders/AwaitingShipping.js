import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const AwaitingShipping = ({ items }) => {
  return (
    <div>
      <h1>Awaiting shipping orders</h1>
      <OrderedItemCard items={items} />
    </div>
  );
};

export default AwaitingShipping;
