import React from 'react';
import SideBarMenu from './SideBarMenu';

import './SideBar.scss';

const SideBar = ({activeItem, onClick}) => (
        <div className='side-bar-container'>
           <SideBarMenu activeItem={activeItem} onClick={onClick}/>
        </div>
);

export default SideBar;
