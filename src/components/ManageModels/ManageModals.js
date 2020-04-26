import React, { Component } from 'react';
import { PaymentMsg, PlaceOrder, Modal, MarketPlaceLogo } from '../commons';
import DeliveryInfo from '../DeliveryInfo';


class ManageModels extends Component {
  state ={};

  handleModal = (e) => {
    const { name } = e.target;
    this.setState({ eventName: name });
  };


  render() {
    const { eventName } = this.state;
    const { triggerModal } = this.props;

    if (eventName === 'placeOrder') {
      return <Modal
      fluid
      content={ <PaymentMsg onClick={(e) => this.handleModal(e)}/>}
      size={'tiny'} trigger={triggerModal} />;
    }
    if (eventName === 'deliverInfo') {
      return <Modal
      fluid
      content={ <DeliveryInfo onClick={(e) => this.handleModal(e)}/>}
      size={'small'} trigger={triggerModal} />;
    }
    return <Modal
    fluid
    header={<MarketPlaceLogo /> }
    content={<PlaceOrder onClick={(e) => this.handleModal(e)}/>}
    size={'mini'} trigger={triggerModal} />;
  }
}

export default ManageModels;
