import React from 'react';
import { DeliveryAddress } from '../commons';

const DeliveryInfo = ({ onClick }) => (
        <div>
            <div>Logo</div>
            <div style={{ background: '#F2F3F4', borderRadius: 10 }}>

                         <div style={{ marginLeft: 30 }}>
                            <DeliveryAddress onClick={onClick}/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <span onClick={onClick}><a>Edit</a>
                                </span>
                                <span><a>+ Add new address</a>
                                </span></div>
                        </div>
            </div>
        </div>);

export default DeliveryInfo;
