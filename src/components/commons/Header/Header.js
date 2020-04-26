import React from 'react';
import DropDown from '../DropDown';
import UserAvatar from '../UserAvatar';
import MarketPlaceLogo from '../MarketPlaceLogo';
import './Header.scss';

const Header = () => (
  <div className='header-container'>
    <div>
      <MarketPlaceLogo />
    </div>
    <div className='drop-down'>
      {/* <DropDown /> */}
      <UserAvatar />

    </div>
  </div>
);

export default Header;
