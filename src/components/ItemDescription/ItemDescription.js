
import React from 'react';
import { Card, Image, Grid, Button, Rating, Label, Header,  } from 'semantic-ui-react'
import './ItemDescription.scss'
import {Modal} from '../commons';

const ItemDescription = () => {
	const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';          
	return(
		   <div className='item-description-container'>
           <div className='item-description'>
            <span><b>Item description</b></span>
            <span>Lorem upsom dolr sit, Lorem upsom dolr sit
             Lorem upsom dolr sit
            Lorem upsom dolr sitLorem upsom dolr sit, Lorem upsom dolr sit, Lorem upsom dolr sit
            Lorem upsom dolr sit
            Lorem upsom dolr sit</span>
            <div className='item-info' >
             <Rating defaultRating={3} maxRating={5}  disabled/>
             <span><b>3.0 | 4 Reviews | 100 Orders | Seller| contact </b></span>
            </div>
           </div>
           <div className='item-amount'> 
            <div className='item-content-info'> 
             <span><b>Frw 3,000</b></span>
             <span>Discount: 0.00 </span>
             <span> Unit of measure</ span>
            </div>
           </div>
           <div className='item-types'>
            <div>Types: Red beans</div>
            <div className='item-types-images'>
             <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
             <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
             <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
             <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
            </div>
            <div className='item-quantity' style={{display: 'flex', flexDirection: 'column' }}>
             <span>Quantity</span>
             <span> 
             <Label size='mini' circular>-</Label>
             <span> 1</span> 
             <Label size='mini' circular>+</Label></span> 
            </div>
            <div>
            <span>
             <Modal title={'deliver to a user address'}/>
            </span>
           </div>
          </div>
          <div className='item-description-btn'>
           <span className='buy-item-btn' > <Button primary>Buy now</Button></span> 
           <span className='add-to-cart-btn'> <Button color='#9C640C'>Add to cart</Button></span>   
           </div>
          </div>
          )
}

export default ItemDescription;
