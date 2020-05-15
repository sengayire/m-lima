import React from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, Icon, Flag } from 'semantic-ui-react';

const DropDown = ({ icon, isAuth }) => {
  const history = useHistory();
  const languageOption = [
    { icon: <Flag name='rwanda' />, text: 'Kinyarwanda' },
    { icon: <Flag name='france' />, text: 'French' },
    { icon: <Flag name='uk' />, text: 'English' },
    { icon: <Flag name='china' />, text: 'Chinese' }
  ];

  const userOptions = [
    { text: <span>My orders</span>, redirect: '/userID/orders' },
    { text: <span>Messages(2)</span> },
    { text: <span>language - English</span> },
    { text: <span>My account</span>, redirect: '/user_id/account' },
    { text: <span>Help</span> },
    { text: <span>Notifications (1)</span> },
    { text: <span>Market demand</span>, redirect: '/market_demand' },
    { text: <span>Logout</span>, redirect: '/' },
  ];
  return (
  <Dropdown
    direction='left'
    text={!isAuth && 'Language'}
    icon={(isAuth && icon) || <Icon name='chevron down' className='drop-down-chevron' size='small'/> }
  >
    <Dropdown.Menu className='drop-down-menu'>
      { (!isAuth && languageOption.map(({ icon, text }) => (
          <Dropdown.Item icon={icon} text={text} />
      ))) || userOptions.map(({ text, redirect }) => (
        <Dropdown.Item text={text} onClick={() => { history.push(redirect); }}/>)) }
    </Dropdown.Menu>
  </Dropdown>);
};

export default DropDown;
