import React from 'react';
const Address = ({ manipulate, onClick }) => (
        <div className='order-description' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <span>Full name</span>
            <span>Phone number</span>
            <span>Full address</span>
            {
                manipulate ? <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, width: '100%' }}>
                <span><a onClick={onClick} name='editAddress' >Edit</a>
                </span>
                <span>
                <a onClick={onClick} name='newAddress'>+ Add new address</a>
                </span>
            </div> : null
            }
        </div>
);

export default Address;
