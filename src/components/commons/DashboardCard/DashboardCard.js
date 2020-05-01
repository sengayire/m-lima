import React from 'react';
import './DashboardCard.scss';

const DashboardCard = ({ color, icon, title }) => (
    <div className='dashboard-card-container'>
    <div className='dashboard-card' style={color}>
       <span className='dashboard-card-icon'>{icon}</span>
       <span className='dashboard-item-number'><h1>0</h1></span>
<span className='dashboard-item-title'>{title}</span>
    </div>
</div>
);

export default DashboardCard;
