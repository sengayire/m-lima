import React from 'react';
import './ItemDetails.scss';
import ItemImages from '../ItemImages';
import ItemDescription from '../ItemDescription';

const ItemDetails = () => (
	   <div className='item-details'>
        <div className='item-details-container'>
         <ItemImages />
         <ItemDescription />
        </div>
	   </div>
	   );

export default ItemDetails;
