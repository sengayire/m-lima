import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { CheckCircle } from '@material-ui/icons';
import './AddToCart.scss';

const AddToCart = ({ onClick, loading }) => {
  const history = useHistory();

  return (
    <div className="add-to-cart">
      <div className="view-shopping-cart">
        <span>
          <CheckCircle fontSize="large" style={{ color: 'green' }} />
        </span>
        <span>
          A new item has benn added to your cart. You now have 1 item in you shopping cart
        </span>
      </div>
      <div className="shopping-cart-btn">
        <span>
          <Button
            size="mini"
            content="View shopping cart"
            primary
            onClick={() => history.push('/shopping-cart')}
          />{' '}
        </span>
        <span>
          <Button
            className="continue-shopping"
            size="mini"
            content="Continue shopping"
            onClick={() => history.push('/')}
          />
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
