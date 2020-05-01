import React from 'react';
import './Orders.scss';

const AllOrders = () => (
<div className='all-orders-container'>
    <h1>My Orders</h1>
    <div className='all-orders-header'>
        <div className='all-orders-header-nav'>
            <span>All orders (3)</span>
            <span>Awaiting shipment (1)</span>
            <span>Awaiting delivery (1)</span>
            <span>Delivery (1)</span>
            <span>Awaiting payment (0)</span>
        </div>
    </div>
    <div className='orders-items-description'>
        <div className='order-items-title'>
            <span>Item</span>
            <span>Sort by</span>
            <span>Status</span>
            <span>Price</span>
        </div>
        <div className='order-item-info'>
            <div className='order-info'>
                <span>Order Id: XXXXXXX</span>
                <span>Seller: XXXXXXX</span>
            </div>
            <div className='item-delivery-info'>
                <span>Order time: dd-mm-yy hh:mm</span>
                <span>Contact seller</span>
                <span>Delivered</span>
                <span>return</span>
                <span>Frw 3, 000</span>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Unde eum iure qui quo,
                 laboriosam sint numquam esse at
                 placet architecto perferendis officiis earum? Iste recusandae sit ratione.
                 Larum, libero aspernatur?
            </div>
        </div>
    </div>
    <div>

    </div>
</div>
);

export default AllOrders;
