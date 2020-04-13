import React from 'react';
import './Header.scss';
import { Image, Dropdown, Icon, Flag } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png';

const Header = () => (
  <div className='header-container'>
    <div>
      {' '} 
      <Image style={{ height: '70px', marginTop: '5px' }} src={logo} />
    </div>
    <div>
      <h1>Market Place</h1>
    </div>
    <div className='drop-down'>
      {' '}
      <Dropdown
        style={{ color: 'grey', width: '100%' }} 
        size='hege'
        direction='left'
        text='Language'
        icon={<Icon name='chevron down' /> }
      >
        <Dropdown.Menu className='drop-down-menu' style={{backgroundColor: '#ECF0F1', borderRadius: 10}}>
          <Dropdown.Item icon={<Flag name='rwanda' />} text='Kinyarwanda' />
          <Dropdown.Item icon={<Flag name='france' />} text='French' />
          <Dropdown.Item icon={<Flag name='uk' />} text='English' />
          <Dropdown.Item icon={<Flag name='china' />} text='Chinese' />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);

export default Header;
