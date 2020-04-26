import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Address from './Address';
import NewAddress from './NewAddress';
import EditAddress from './EditAddress';

class DeliveryAddress extends Component {
        state = {};

        handleClick = (e) => {
          const { name } = e.target;
          this.setState({ eventName: name, clicked: true });
        }

        render() {
          const { onClick } = this.props;
          const { eventName, clicked } = this.state;
          return (
        <div className='place-order deliver-info' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div>
        <Button
        style={{ background: 'transparent' }}
        icon='chevron left'
        onClick={onClick}
        name='deliverInfo'
        /> Deliver Information
        </div>
        <div style={{ width: '100%' }}>
        {
         (clicked
                && ((eventName === 'editAddress'
                && <EditAddress />)
                || <NewAddress />))
                || <Address manipulate onClick={(e) => this.handleClick(e)}/>
        }
        </div>
        </div>
          );
        }
}
export default DeliveryAddress;
