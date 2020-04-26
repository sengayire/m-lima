import React from 'react';
import { DeliveryAddress, MarketPlaceLogo } from '../commons';

const DeliveryInfo = ({ onClick }) => (
        <div>
            <div><MarketPlaceLogo /></div>
            <div style={{ background: '#F2F3F4', borderRadius: 10 }}>

                         <div style={{ marginLeft: 30 }}>
                            <DeliveryAddress onClick={onClick}/>
                        </div>
            </div>
        </div>);

export default DeliveryInfo;
