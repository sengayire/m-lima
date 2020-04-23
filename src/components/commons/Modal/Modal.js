import React, { Component } from 'react';
import { Modal, Label } from 'semantic-ui-react';
import {Close} from '@material-ui/icons';
import './Modal.scss';

class CustomerModal extends Component {
  render() {
    const { trigger, size, content, header } = this.props;
    return (
         <Modal className='customer-modal' size={size} closeIcon={<Label
	      icon={<Close />}
          corner='right'
	/>}
	trigger={trigger}>
        {header ? <Modal.Header><div className='logo'>{header}</div></Modal.Header> : ''}
<Modal.Content>
{content}
</Modal.Content>
</Modal>
 
    );
  }
}

export default CustomerModal;
