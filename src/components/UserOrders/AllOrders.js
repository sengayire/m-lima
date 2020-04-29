import React from 'react';
import DashboardContainer from '../DashboardContainer';
import Container from '../../container';
import { Header } from '../commons';

const AllOrders = () => (
    <Container
    header={<Header/>}
    content={<DashboardContainer />}
  />
);

export default AllOrders;
