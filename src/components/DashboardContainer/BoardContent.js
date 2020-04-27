import React from 'react';

const BoardContent = ({ activeItem }) => (
                <div className='board-content'>
                        {activeItem === 'all orders' && <div>All order</div> }
                        {activeItem === 'awaiting shipment' && <div>shipment here</div> }
                        {activeItem === 'awaiting delivery' && <div>awaiting delivery</div> }
                        {activeItem === 'awaiting payment' && <div>awaiting payment</div> }
                        {activeItem === 'delivery' && <div>awaiting delivery</div> }
                </div>
);

export default BoardContent;
