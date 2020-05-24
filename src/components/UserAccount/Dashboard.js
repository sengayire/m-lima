import React from 'react';
import { ShoppingCart, MoreHoriz, Check } from '@material-ui/icons';
import { Icon } from 'semantic-ui-react';
import './Dashboard.scss';
import { DashboardCard } from '../commons';

const Dashboard = ({ items, profile }) => {
  return (
    <div className="account-dashboard-container">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="cards-container">
        <DashboardCard
          profile={profile}
          redirect="/user_orders"
          title="All Orders"
          color={{ background: '#015790' }}
          icon={<ShoppingCart style={{ fontSize: 50, color: '#015790' }} />}
          items={items}
        />

        <DashboardCard
          title="Awaiting payment"
          color={{ background: '#ee5b24' }}
          icon={<MoreHoriz style={{ fontSize: 50, color: '#ee5b24' }} />}
        />
        <DashboardCard
          title="Awaiting shipment"
          color={{ background: '#b53571' }}
          icon={<Icon name="truck" style={{ fontSize: 50, color: '#b53571' }} />}
        />
        <DashboardCard
          title="Awaiting delivery"
          color={{ background: '#03c46b' }}
          icon={<Check style={{ fontSize: 50, color: '#03c46b' }} />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
