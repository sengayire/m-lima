import React from 'react';
import { Dropdown, Icon, Flag } from 'semantic-ui-react';

const DropDown = () => (<Dropdown
        direction='left'
        text='Language'
        icon={<Icon name='chevron down' className='drop-down-chevron' size='small'/> }
      >
        <Dropdown.Menu className='drop-down-menu'>
          <Dropdown.Item icon={<Flag name='rwanda' />} text='Kinyarwanda' />
          <Dropdown.Item icon={<Flag name='france' />} text='French' />
          <Dropdown.Item icon={<Flag name='uk' />} text='English' />
          <Dropdown.Item icon={<Flag name='china' />} text='Chinese' />
        </Dropdown.Menu>
      </Dropdown>);

export default DropDown;
