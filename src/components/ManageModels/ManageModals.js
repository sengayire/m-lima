import React from 'react';
import { PaymentMsg, PlaceOrder } from '../commons';
import DeliveryInfo from '../DeliveryInfo';

const ManageModels = ({ eventName, onClick }) => {
    console.log('name here ==', eventName)

    if (eventName === 'placeOrder') {
        return <PaymentMsg onClick={onClick}/>
    }
    if (eventName === 'deliverInfo') { 
        return <DeliveryInfo />
    }
    return <PlaceOrder onClick={onClick} />
}

export default ManageModels;