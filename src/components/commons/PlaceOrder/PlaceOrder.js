import React from 'react';
import './PlaceOrder.scss';
import { Icon, Image, Button } from 'semantic-ui-react';
import mtnLogo from '../../../assets/images/mtn_logo.jpg';
import DeliveryAddress from '../DeliveryAddress';

const PlaceOrder = ({ onClick}) => (
        <div className='place-order-container'>
         <div className='place-order order-summary'>
           <span><center>Order Summary</center></span>
           <span className='order-description'>Total:</span>
         </div>
        <DeliveryAddress onClick={onClick}/>
         <div className='place-order payment-method'>
           <div><center>Payment Method <Icon name='chevron right' /></center></div>
           <div className='order-description'><Image size='tiny' className='payment-metod-logo' src={mtnLogo} /></div>
         </div>
    <div><center><Button name='placeOrder' onClick={onClick} content='Place order' primary/></center> </div>
         </div>
);

export default PlaceOrder;
