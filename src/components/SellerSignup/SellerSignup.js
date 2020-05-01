import React from 'react';
import Container from '../../container';
import { Header } from '../commons';
import SellerSignupContainer from './SellerSignupContainer';

const SellerSignup = () => (
    <Container
    header={<Header />}
    content={<SellerSignupContainer />}
  />
);

export default SellerSignup;
