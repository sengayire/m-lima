import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name='align justify' />
  </span>
);

const options = [
  {
    key: 'user',
    text: (
      <span>
        {' '}
        <Icon name='align justify' />
        Catagories
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
];
const DropDownBtn = () => (
  <div>
    {' '}
    <Dropdown
      icon={<Icon name='chevron down' />}
      style={{ backgroundColor: 'white', color: 'gray' }}
      trigger={trigger}
      options={options}
    />
  </div>
);

export default DropDownBtn;
