import React from 'react';
// import { AllOrders } from '../UserOrders';

const BoardContent = ({ cases }) => {
  const manageActiveItem = (cases) => cases;
  return (
        <div className='board-content'>
        {
        manageActiveItem(cases)
        }
        </div>
  );
};

export default BoardContent;
