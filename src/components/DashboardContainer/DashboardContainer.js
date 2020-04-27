import React from 'react';
import BoardContent from './BoardContent';
import './DashboardContainer.scss';
import SideBar from '../SideBar';

const DashboardContainer = () => (
        <div className='dashboard-container'>
            <SideBar />
            <BoardContent />
        </div>
);

export default DashboardContainer;
