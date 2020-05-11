import React from 'react';
import LazyLoad from 'react-lazyload';
import Container from '../../container';
import Contents from '../Contents';
import { Header, ItemCard } from '../commons';
import ItemsContainer from '../ItemsContainer';

const Home = () => (
  <LazyLoad>
    <Container
      header={<Header isAuth={false} />}
      content={<Contents contents={<ItemsContainer items={<ItemCard />} />} />}
    />
  </LazyLoad>
);

export default Home;
