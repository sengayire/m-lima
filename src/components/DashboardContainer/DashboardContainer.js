import React, { Component } from 'react';
import BoardContent from './BoardContent';
import './DashboardContainer.scss';
import SideBar from '../SideBar';

class DashboardContainer extends Component {
    state = { activeItem: 'all Orders' }

    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
    }

    render() {
      const { activeItem } = this.state;
      const { manageMenu, menuItems } = this.props;
      return (
        <div className='dashboard-container'>
            <SideBar menuItems={menuItems}activeItem={activeItem} onClick={this.handleItemClick}/>
            <BoardContent cases={manageMenu(activeItem)}/>
        </div>
      );
    }
}

export default DashboardContainer;
