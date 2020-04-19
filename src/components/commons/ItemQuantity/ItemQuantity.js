import React from 'react';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import './ItemQuantity.scss';

const ItemQuantity = () => (
        <div className='item-quantity'>
              <span><b>Quantity:</b></span>
              <span className='action-btn'>
               <span><RemoveCircleOutline color='action' fontSize='small' /></span>
               <span> 1 </span>
               <span><AddCircleOutline color='action' fontSize='small'/></span>
              </span>
        </div>
);

export default ItemQuantity;
