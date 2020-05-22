import React from 'react';
import { Image, Button, Icon, Loader, Dimmer } from 'semantic-ui-react';
import { StarBorder } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import './ItemDescription.scss';
import { Modal, ItemQuantity } from '../commons';
import AddToCart from '../AddToCart';
import Delivery from '../Delivery';
import ManageModals from '../ManageModels';

const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';

const ItemDescription = ({ product, handleClick, loading }) => {
  const { description, discountPercantage, measurementUnit, productCategory, unitPrice } = product;

  console.log('in item', loading);

  return (
    <div className="item-description-container">
      <div className="item-description">
        <span>
          <b>Item description</b>
        </span>
        <span>{description}</span>
        <div className="item-info">
          <span>
            {' '}
            <Rating
              name="customized-empty"
              defaultValue={2}
              precision={0.5}
              emptyIcon={<StarBorder fontSize="inherit" />}
            />
          </span>
          <span>
            <b> 3.0 | 4 Reviews | 100 Orders | Seller| contact </b>
          </span>
        </div>
      </div>
      <div className="item-amount">
        <div className="item-content-info">
          <span>
            <b>Frw {unitPrice}</b>
          </span>
          <span>Discount: {discountPercantage} </span>
          <span> Unit of measure: {measurementUnit}</span>
        </div>
      </div>
      <div className="item-types">
        <div>
          <b>Types:</b> {productCategory.name}
        </div>
        <div className="item-types-images">
          <span>
            <Image size="tiny" src={PLACEHOLDER_IMAGE} />
          </span>
          <span>
            <Image size="tiny" src={PLACEHOLDER_IMAGE} />
          </span>
          <span>
            <Image size="tiny" src={PLACEHOLDER_IMAGE} />
          </span>
          <span>
            <Image size="tiny" src={PLACEHOLDER_IMAGE} />
          </span>
        </div>
        <div className="item-quantity">
          <ItemQuantity />
        </div>
        <div>
          <span>
            <Modal
              content={<Delivery />}
              size="small"
              trigger={
                <span>
                  {' '}
                  Deliver to <a>Place</a>
                  <Icon name="chevron down" />
                </span>
              }
            />
          </span>
        </div>
      </div>
      <div className="item-description-btn">
        <span className="buy-iem-btn">
          <ManageModals triggerModal={<Button primary> Buy now</Button>} />
        </span>
        <span className="add-to-cart-btn">
          <Modal
            content={
              (loading && (
                <Dimmer active>
                  <Loader>Loading</Loader>
                </Dimmer>
              )) || <AddToCart loading={loading} onClick={handleClick} />
            }
            size="tiny"
            trigger={<Button onClick={handleClick}> Add to cart</Button>}
          />
        </span>
      </div>
    </div>
  );
};

export default ItemDescription;
