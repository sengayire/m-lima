import React from 'react';
import { Dropdown, Icon, Flag } from 'semantic-ui-react';

const DropDown = ({ icon }) => {
  const languageOption = [
    { icon: <Flag name='rwanda' />, text: 'Kinyarwanda' },
    { icon: <Flag name='france' />, text: 'French' },
    { icon: <Flag name='uk' />, text: 'English' },
    { icon: <Flag name='china' />, text: 'Chinese' }
  ];

  const userOptions = [
    { text: <span>My orders</span> },
    { text: <span>Messages(2)</span> },
    { text: <span>language - English</span> },
    { text: <span>My account</span> },
    { text: <span>Help</span> },
    { text: <span>Notifications(1)</span> },
    { text: <span>Market demand</span> },
    { text: <span>Logout</span> },
  ];
  return (
  <Dropdown
    direction='left'
    text={!icon && 'Language'}
    icon={icon || <Icon name='chevron down' className='drop-down-chevron' size='small'/> }
  >
    <Dropdown.Menu className='drop-down-menu'>
      { (!icon && languageOption.map((element) => (
          <Dropdown.Item icon={element.icon} text={element.text} />
      ))) || userOptions.map((element) => (
        <Dropdown.Item text={element.text} />)) }
    </Dropdown.Menu>
  </Dropdown>);
};

export default DropDown;
