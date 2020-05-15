import React from 'react';
import DropDown from '../DropDown';
import UserAvatar from '../UserAvatar';
import MarketPlaceLogo from '../MarketPlaceLogo';
import './Header.scss';

const Header = ({isAuth}) => (
  <div className='header-container'>
    <div>
      <MarketPlaceLogo />
    </div>
    <div className='drop-down'>
      <DropDown isAuth={isAuth} icon={<UserAvatar userName='Hi, John Doe!' />}/>
    </div>
  </div>
);

export default Header;
