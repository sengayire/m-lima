import React from 'react';
import { NavBar } from '../commons';
import './Contents.scss';

const Contents = ({ contents }) => (
    <div className='content-container'>
      <div className='nav-bar'>{<NavBar />}</div>
      <div className='items-container'>{contents}</div>
    </div>
);

export default Contents;
