import React from 'react';
import Container from '../../container';
import { Header } from '../commons';
import Contents from '../Contents';
import CartItems from './CartItems';

const ShoppingCart = () => (
    <Container
    header={<Header />}
    content={<Contents contents={<CartItems/>} />}
  />
);


export default ShoppingCart;
