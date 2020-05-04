import React, { Component } from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';
import Dashboard from './Dashboard';
import Products from './Products';
import PersonalInformation from './PersonalInformation';
import SecurityInfo from './SecurityInfo';


class SellerDashboard extends Component {
    state ={ name: 'personalInfo' };

    handleClick = (name) => {
      this.setState({ name });
    }

   manageMenu = (activeItem) => {
     const { name } = this.state;
     switch (activeItem) {
       case 'dashboard': return <Dashboard />;
       case 'personal information': return <PersonalInformation handleClick={this.handleClick} name={name}/>;
       case 'security information': return <SecurityInfo />;
       case 'orders': return <div>hello here</div>;
       case 'products': return <Products />;
       case 'market demand': return <Dashboard />;
       default: return <Dashboard />;
     }
   };

   ordersMenuItems = [
     { name: 'dashboard' },
     { name: 'personal information' },
     { name: 'security information' },
     { name: 'orders' },
     { name: 'products' },
     { name: 'market demand' },
   ];

   render() {
     return (<Container
        header={<Header isAuth={true}/>}
       content={<DashboardContainer menuItems={this.ordersMenuItems} manageMenu={this.manageMenu}/>}
      />);
   }
}

export default SellerDashboard;
