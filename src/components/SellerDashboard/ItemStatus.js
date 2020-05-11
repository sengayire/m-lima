import React from 'react';

const ItemStatus = ({ status, color, bg }) => (
  <div
    className="item-status-container"
    style={{
      color: `${color}`,
      backgroundColor: `${bg}`,
    }}
  >
    <span>{status}</span>
  </div>
);

export default ItemStatus;
