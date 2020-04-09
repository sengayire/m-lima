import React from 'react';
import { Card } from 'semantic-ui-react';
import './ItemsContainer.scss';

const itemsContainer = ({ items }) => {
  return (
    <div className='container'>
      <Card.Group itemsPerRow={4}>{items}</Card.Group>
    </div>
  );
};

export default itemsContainer;
