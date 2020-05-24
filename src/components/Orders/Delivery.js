import React from 'react';
import OrderedItemCard from './OrderedItemCard';

const Delivery = ({ items }) => (
  <div>
    <h1>Delivered orders</h1>
    <OrderedItemCard items={items} />
  </div>
);

export default Delivery;
