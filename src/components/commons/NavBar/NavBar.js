import React from 'react';
import DropDownBtn from '../DropDownBtn';
import SearchBar from '../SearchBar';
import Cart from '../Cart';
import JoinBtn from '../JoinBtn';
import './NavBar.scss';

const NavBar = () => (
  <div className='nav-bar'>
    <div>
      <DropDownBtn />
    </div>
    <div className='search-bar'>
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
