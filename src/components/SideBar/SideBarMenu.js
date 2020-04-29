import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SideBarMenu extends Component {
  ordersItemMenu= [
    { name: 'all orders' },
    { name: 'awaiting shipment' },
    { name: 'awaiting delivery' },
    { name: 'awaiting payment' },
    { name: 'delivery' },
  ]

  render() {
    const { activeItem, onClick } = this.props;
    return (
      <div className='side-bar-menu'>
        <Menu pointing secondary vertical>
          {
            this.ordersItemMenu.map(({ name }) => (<Menu.Item
                name={name}
                active={activeItem === name}
                onClick={onClick}
              />))
          }
      </Menu>
      </div>
    );
  }
}

export default SideBarMenu;
