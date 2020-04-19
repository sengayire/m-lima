import React from 'react';
import Container from '../../container';
import Contents from '../Contents';
import { Header, ItemCard } from '../commons';
import ItemsContainer from '../ItemsContainer';

const Home = () => (
    <Container
      header={<Header />}
      content={<Contents contents={<ItemsContainer items={<ItemCard />} />} />}
    />
);

export default Home;
