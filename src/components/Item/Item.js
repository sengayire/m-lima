import React from 'react';
import Container from '../../container';
import {Header, ItemCard} from '../commons';
import Contents from '../Contents';
import ItemDetails from '../ItemDetails';

const Item = () => {
	return(
		 <Container
          header={<Header />}
          content={<Contents contents={<ItemDetails details={<div>Hello details mma</div>}/>} />}
        />
		);
}

export default Item;