import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import './PaymentMsg.scss';

const PaymentMsg = () => { 
    return (
        <div className='payment-mesasge'>
            <div className='success-icon'><CheckCircle fontSize='large' style={{ color: 'green' }} /><span><b>Payment successfull!</b></span></div>
            <div className='payment-success-messge'>
                <div className='success-message'>Thank you ! we have received your payment</div>
                <div><a>Home</a></div>
           </div>
       </div>
    )
}

export default PaymentMsg;