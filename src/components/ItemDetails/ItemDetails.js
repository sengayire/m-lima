import React from 'react';
import './ItemDetails.scss';
import ItemImages from '../ItemImages';
import ItemDescription from '../ItemDescription';

const ItemDetails = ({ product, handleClick, loading }) => (
  <div className="item-details">
    <div className="item-details-container">
      <ItemImages product={product} />
      <ItemDescription loading={loading} handleClick={handleClick} product={product} />
    </div>
  </div>
);

export default ItemDetails;
