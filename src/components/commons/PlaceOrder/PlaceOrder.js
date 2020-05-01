import React from 'react';
import './PlaceOrder.scss';
import { Icon, Image, Button } from 'semantic-ui-react';
import mtnLogo from '../../../assets/images/mtn_logo.jpg';
import { Address } from '../DeliveryAddress';

const PlaceOrder = ({ onClick }) => (
        <div className='place-order-container'>
         <div className='place-order order-summary'>
           <span><center>Order Summary</center></span>
           <span className='order-description' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
             <span>Total:</span> <span>frw 3,000</span></span>
         </div>
         <div className='place-order deliver-info' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                    Deliver Information
                    <Button
                    style={{ background: 'transparent' }}
                    onClick={onClick}
                    icon={<Icon name='chevron right'/>}
                    name='deliverInfo'
                    />
            </div>
            <Address />
        </div>
         <div className='place-order payment-method'>
           <div><center>Payment Method <Icon name='chevron right' /></center></div>
           <div className='order-description'><Image size='tiny' className='payment-metod-logo' src={mtnLogo} /></div>
         </div>
    <div><center><Button name='placeOrder' onClick={onClick} content='Place order' primary/></center> </div>
         </div>
);

export default PlaceOrder;
