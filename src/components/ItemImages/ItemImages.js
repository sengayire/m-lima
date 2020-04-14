import React from 'react'; 
import { Card, Image, Grid, Button } from 'semantic-ui-react';
const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';

const ItemImages = () => {

return(
	   <div className='item-images-container'>
      <div className='selected-image'> 
       <Card fluid className='image-card' >
        <Image src={PLACEHOLDER_IMAGE} className='item-image'/>    
         </Card> 
            </div>
            <div className='item-images'>
             <Card.Group itemsPerRow={4}>
              <Card image={PLACEHOLDER_IMAGE} />
              <Card image={PLACEHOLDER_IMAGE} />
              <Card image={PLACEHOLDER_IMAGE} />
              <Card image={PLACEHOLDER_IMAGE} />
            </Card.Group>
           </div>
          </div>
	       
         );
};



export default ItemImages;