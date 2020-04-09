import React from 'react';
import DropDownBtn from '../DropDownBtn';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import JoinBtn from '../JoinBtn';

const NavBar = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <DropDownBtn />
    </div>
    <div>
      <SearchBar />
    </div>
    <div>
      <Cart />
    </div>
    <div>
      <JoinBtn />
    </div>
  </div>
);

export default NavBar;
