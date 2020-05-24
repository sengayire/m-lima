import React from 'react';
import './DashboardCard.scss';
import { Link } from 'react-router-dom';

const DashboardCard = ({ color, icon, title, items, handleClick, profile, redirect }) => {
  console.log('ze id', profile && profile.id);

  return (
    <Link
      to={profile && `/${profile.id}${redirect}`}
      className="dashboard-card-container"
      onClick={handleClick}
    >
      <div className="dashboard-card" style={color}>
        <span className="dashboard-card-icon">{icon}</span>
        <span className="dashboard-item-number">
          <h1>{(items && items.getTotalItems) || 0}</h1>
        </span>
        <span className="dashboard-item-title">{title}</span>
      </div>
    </Link>
  );
};

export default DashboardCard;
