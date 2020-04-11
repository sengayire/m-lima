import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className='cart-container '>
      <div>
        <Icon style={{ color: 'white' }} size='big' name='cart' />
      </div>
      <div className='cart-num'>
        <span>
          <Label size='tiny' circular color='red'>
            0
          </Label>
        </span>{' '}
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Cart;
