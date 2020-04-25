import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import Address from './Address';

const DeliveryAddress = ({ onClick }) => (
        <div className='place-order deliver-info' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div> Deliver Information <Button style={{ background: 'transparent' }} icon={<Icon name='chevron right' />} onClick={onClick} name='deliverInfo' /></div>
              <Address />
        </div>
);
export default DeliveryAddress;
