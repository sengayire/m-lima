import React, { Component } from 'react';
import './SellerDashboard.scss';
import AllProducts from './AllProducts';
import NewProduct from './NewProduct';


class Products extends Component {
  state= {};

   handleClick = (e) => {
     this.setState({ action: e });
   };

   render() {
     const { action } = this.state;
     console.log('action here', action);
     return (
      <div className='seller-dashboard-container'>
          {action === 'newProduct' ? <NewProduct />
            : <AllProducts handleClick={this.handleClick}/>
          }
      </div>
     );
   }
}

export default Products;
