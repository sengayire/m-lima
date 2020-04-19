import React from 'react';
import Container from '../../container';
import { Header } from '../commons';
import Contents from '../Contents';
import ItemDetails from '../ItemDetails';

const Item = () => (
		 <Container
          header={<Header />}
          content={<Contents contents={<ItemDetails />} />}
        />
);

export default Item;
