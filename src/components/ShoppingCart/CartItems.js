import React, { Component } from 'react';
import './ShoppingCart.scss';
import { Button, Checkbox, Image, Icon } from 'semantic-ui-react';
import { InsertComment, DeleteSweep } from '@material-ui/icons';
import { connect } from 'react-redux';
import { ItemQuantity, Modal } from '../commons';
import ManageModals from '../ManageModels';
import LOGO from '../../assets/images/logo.png';
import { deleteOrder } from '../../redux/actions';

const PLACEHOLDER_IMAGE = 'https://react.semantic-ui.com/images/wireframe/image.png';

class CartItems extends Component {
  state = {
    items: { getTotalItems: 0, orderDetails: [] },
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { items } = nextProps;

    return items && this.setState({ items });
  }

  handleClick = (e, action, id) => {
    const { name } = e.target;
    console.log('name', e.target);

    if (action === 'delete') {
      const { deleteOrder } = this.props;
      deleteOrder(id);
    }
    this.setState({
      eventName: name,
      clicked: true,
    });
  };

  render() {
    const {
      clicked,
      eventName,
      items: { getTotalItems, orderDetails },
    } = this.state;

    return (
      <div className="cart-items-container">
        <div className="cart-items">
          <div className="all-carts-orders">
            <div className="select-all-carts">
              <div className="all-carts">
                <span>
                  <b>Shopping card({getTotalItems})</b>
                </span>
                <span>
                  <Checkbox label="Select all" />
                </span>
              </div>
            </div>
            {orderDetails &&
              orderDetails.map((item) => {
                return (
                  <div className="all-orders-list">
                    <div className="select-item">
                      <Checkbox />
                    </div>
                    <div className="carts-info">
                      <div className="cart-seller">
                        <div className="seller-info">
                          <span>Seller</span>
                          <div className="chat-seller">
                            <InsertComment color="action" />
                            <span> Chat with seller</span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item-info">
                        <div className="item-photo">
                          <Image size="small" src={PLACEHOLDER_IMAGE} />
                        </div>
                        <div className="order-item-desctiption">
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in
                            iaculis nunc sed augue lacus. Quam nulla porttitor massa id neque
                            aliquam. Ultrices mi tempus imperdiet nulla malesuada.
                          </span>
                          <span>
                            <b>frw 3,000</b>
                          </span>
                          <span>
                            Type: <b>red beans</b>
                          </span>
                          <span>Discount: 0,00</span>
                          <span>
                            Unit of measure: <b>kgs</b>
                          </span>
                          <span>
                            Delivery: <b> 1, 000 frw</b>
                          </span>
                        </div>
                        <div className="order-item-quantity">
                          <Button
                            name="delete"
                            type="button"
                            onClick={(e) => this.handleClick(e, 'delete', item.orderInfo)}
                          >
                            <Icon>
                              <DeleteSweep color="action" />
                            </Icon>
                          </Button>
                          <div>
                            <ItemQuantity />
                          </div>
                        </div>
                      </div>
                      <div className="buy-item-btn">
                        <Modal
                          fluid
                          header={clicked ? null : <Image src={LOGO} size="tiny" />}
                          content={
                            <ManageModals
                              eventName={eventName}
                              onClick={(e) => this.handleClick(e)}
                            />
                          }
                          size={clicked ? 'tiny' : 'mini'}
                          trigger={
                            <center>
                              <Button content="Buy this item" primary size="mini" />
                            </center>
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="order-summary">
            <div className="order-summary-content">
              <span>
                {' '}
                <center>
                  <b>Order summary</b>
                </center>
              </span>
              <div className="order-total-price">
                <div className="order-price-description">
                  <span>Subtotal: </span>
                  <span>frw 3,000</span>{' '}
                </div>
                <div className="order-price-description">
                  {' '}
                  <span>Delivery:</span> <span>frw 1,000</span>{' '}
                </div>
              </div>
              <div className="item-total-price">
                <div className="item-price">
                  <span>Total:</span> <span>frw 4,000</span>{' '}
                </div>
                <div>
                  <Modal
                    fluid
                    header={clicked ? null : <Image src={LOGO} size="tiny" />}
                    content={
                      <ManageModals eventName={eventName} onClick={(e) => this.handleClick(e)} />
                    }
                    size={clicked ? 'tiny' : 'mini'}
                    trigger={
                      <center>
                        <Button primary content="Buy(1)" size="mini" />
                      </center>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ signin: { profile } }) => ({ profile });

export default connect(mapStateToProps, { deleteOrder })(CartItems);
