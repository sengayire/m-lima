import React from 'react';
import './ItemsContainer.scss';

const itemsContainer = ({ items }) => (
    <div className='container'>
      <div>{items}</div>
    </div>
);

export default itemsContainer;
