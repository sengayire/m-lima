import React from 'react';
import { NavBar } from '../commons';

const Contents = ({ contents }) => {
  return (
    <div>
      <div className='nav-bar'>{<NavBar />}</div>
      <div className='items-container'>{contents}</div>
    </div>
  );
};

export default Contents;
