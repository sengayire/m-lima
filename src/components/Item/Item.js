import React from 'react';
import Container from '../../container';
import {Header, ItemCard} from '../commons';
import Contents from '../Contents';
import ItemsContainer from '../ItemsContainer';


const Item = () => {
	return(
		 <Container
          header={<Header />}
          content={<Contents contents={<div style={{BackgroundColor: 'green',  width:'100%'}}>Hello</div>} />}
        />
		);
}

export default Item;