import React, { Component } from 'react';
import Container from '../../container';
import { Header } from '../commons';
import SellerSignupContainer from './SellerSignupContainer';

class SellerSignup extends Component {
    state= { name: 'individual' };

   handleClick = (name) => {
     this.setState({ name });
   };

   render() {
     const { name } = this.state;
     console.log(name)
     return (
        <Container
        header={<Header />}
        content={<SellerSignupContainer name={name} handleClick={this.handleClick} />}
      />
     );
   }
}

export default SellerSignup;
