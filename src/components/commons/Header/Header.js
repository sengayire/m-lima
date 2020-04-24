import React from 'react';
import DropDown from '../DropDown';
import MarketPlaceLogo from '../MarketPlaceLogo';
import './Header.scss';

const Header = () => (
  <div className='header-container'>
    <div>
      <MarketPlaceLogo />
    </div>
    <div className='drop-down'>
      <DropDown />
    </div>
  </div>
);

export default Header;
