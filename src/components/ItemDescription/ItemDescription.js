import React from 'react';
import { Image, Button, Icon, } from 'semantic-ui-react';
import { StarBorder } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import './ItemDescription.scss';
import { Modal, ItemQuantity } from '../commons';
import AddToCart from '../AddToCart';
import Delivery from '../Delivery';
import ManageModals from '../ManageModels';

const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';

const ItemDescription = () => (
              <div className='item-description-container'>
              <div className='item-description'>
              <span><b>Item description</b></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dapibus ultrices in iaculis nunc sed augue lacus.
                  Quam nulla porttitor massa id neque aliquam.
                  Ultrices mi tempus imperdiet nulla malesuada.
                  Eros in cursus turpis massa tincidunt dui ut ornare lectus.
                  Egestas sed sed risus pretium.
                 </span>
                <div className='item-info' >
               <span> <Rating
            name="customized-empty"
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorder fontSize="inherit" />}
          /></span>
                <span><b> 3.0 | 4 Reviews | 100 Orders | Seller| contact </b></span>
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
                <div><b>Types:</b> Red beans</div>
                <div className='item-types-images'>
                <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
                <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
                <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
                <span><Image size='tiny' src={PLACEHOLDER_IMAGE}/></span>
                </div>
                 <div className='item-quantity'>
                   <ItemQuantity />
                 </div>
                <div>
                <span>
                <Modal content={<Delivery />} size='small' trigger={<span> Deliver to <a>{'Place'}</a><Icon name='chevron down' /></span>} />
                </span>
              </div>
              </div>
              <div className='item-description-btn'>
           <span className='buy-iem-btn' >
           <ManageModals triggerModal={<Button primary> Buy now</Button>}/>
           </span>
              <span className='add-to-cart-btn'> <Modal content={<AddToCart /> } size='tiny' trigger={ <Button > Add to cart</Button>} /></span>
              </div>
              </div>
);


export default ItemDescription;
