import React from 'react';
import { Menu } from 'semantic-ui-react';

const SideBarMenu = ({ activeItem, onClick, menuItems }) => (
  <div className='side-bar-menu'>
        <Menu pointing secondary vertical>
          {
            menuItems && menuItems.map(({ name }) => (<Menu.Item
                name={name}
                active={activeItem === name}
                onClick={onClick}
              />))
          }
      </Menu>
      </div>
);


export default SideBarMenu;
