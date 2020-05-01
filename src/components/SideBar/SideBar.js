import React from 'react';
import SideBarMenu from './SideBarMenu';

import './SideBar.scss';

const SideBar = ({activeItem, onClick, menuItems}) => (
        <div className='side-bar-container'>
           <SideBarMenu menuItems={menuItems} activeItem={activeItem} onClick={onClick}/>
        </div>
);

export default SideBar;
