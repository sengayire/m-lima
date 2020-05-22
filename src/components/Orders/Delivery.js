import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const Delivery = ({ items }) => (
  <div>
    <div>
      <h1>Delivered orders</h1>
    </div>
    <OrderedItemCard items={items} />
  </div>
);

export default Delivery;
