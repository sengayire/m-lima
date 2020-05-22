import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import './Cart.scss';
import { Link } from 'react-router-dom';

const Cart = ({ isAuth }) => (
  <div className="cart-container ">
    <div>
      <Link to={isAuth && '/shopping-cart'}>
        {' '}
        <Icon style={{ color: 'white' }} size="big" name="cart" />
      </Link>
    </div>
    <div className="cart-num">
      <span>
        <Label size="tiny" circular color="red">
          0
        </Label>
      </span>{' '}
      <span>Cart</span>
    </div>
  </div>
);

export default Cart;
