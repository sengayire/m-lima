import React from 'react';
import './Header.scss';
import { Image, Dropdown, Icon } from 'semantic-ui-react';
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
        style={{ color: 'grey' }}
        direction='left'
        text='Language'
        icon={<Icon name='chevron down' />}
      >
        <Dropdown.Menu>
          <Dropdown.Item icon={<Icon name='chevron down' />} text='Kinyarwanda' />
          <Dropdown.Item icon={<Icon name='chevron down' />} text='French' />
          <Dropdown.Item icon={<Icon name='chevron down' />} text='English' />
          <Dropdown.Item icon={<Icon name='chevron down' />} text='Chinese' />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);

export default Header;
