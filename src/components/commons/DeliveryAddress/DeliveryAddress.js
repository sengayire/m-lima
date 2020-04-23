import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import Address from './Address';
const DeliveryAddress = ({ onClick}) => { 
    return (
        <div className='place-order deliver-info'>
            <div> <center>Deliver Information <Button icon={<Icon name='chevron right' />} onClick={onClick} name='deliverInfo' /></center></div>
              <Address />
        </div>
    );
}
export default DeliveryAddress;