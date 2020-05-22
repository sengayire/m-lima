import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import { DeleteSweep, KeyboardArrowDown } from '@material-ui/icons';

const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';

const OrderedItemCard = ({ items }) => {
  const orders = items && items.orderDetails;
  const status = items && items.status;
  return (
    <div className="all-orders-container">
      <div className="orders-items-description">
        <div className="order-items-title">
          <span>Item</span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Sort by <KeyboardArrowDown />
          </span>
          <span>Status</span>
          <span>Price</span>
        </div>

        {orders &&
          status === 'SHOPPING' &&
          orders.map((order) => {
            return (
              <div className="order-item-info">
                <div className="order-info-body">
                  <div className="order-info">
                    <div className="order-id-time">
                      <span>Order Id: XXXXXXX</span>
                      <span>Order time: dd-mm-yy hh:mm</span>
                    </div>
                    <div className="seller-info-contact">
                      <span>Seller: XXXXXXX</span>
                      <span>Contact seller</span>
                    </div>
                  </div>
                  <div className="order-delivery-price">
                    <div className="delivery-return">
                      <div>
                        <span>Delivered</span>
                      </div>
                      <div>
                        <span>return</span>
                      </div>
                      <div className="order-price">
                        <span>Frw 3, 000</span>
                        <DeleteSweep />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-image-description">
                  <Card className="item-image-container">
                    <Image src={PLACEHOLDER_IMAGE} />
                  </Card>
                  <div className="item-description">
                    <div>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum iure qui
                        quo, laboriosam sint numquam esse at placet architecto perferendis officiis
                        earum? Iste recusandae sit ratione. Larum, libero aspernatur?
                      </span>
                    </div>
                    <div className="item-type-quantity">
                      <span>Type:red beans</span>
                      <span>Quantity: 3 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderedItemCard;
