import React from 'react';
import DropDown from '../DropDown';
import UserAvatar from '../UserAvatar';
import MarketPlaceLogo from '../MarketPlaceLogo';
import './Header.scss';

const Header = ({ isAuth, profile }) => (
  <div className="header-container">
    <div>
      <MarketPlaceLogo />
    </div>
    <div className="drop-down">
      <DropDown
        isAuth={isAuth}
        icon={<UserAvatar userName={`${profile && `Hi! ${profile.name}`}`} />}
        id={profile && profile.id}
      />
    </div>
  </div>
);

export default Header;
