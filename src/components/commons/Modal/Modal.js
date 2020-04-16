import React, {Component} from 'react';
import {Modal, Header,Label} from 'semantic-ui-react';

class CustomerModal extends Component {
	state = {
      showModal: false
    }

    openModal = () => {
    this.setState({ ...this.state, showModal: true })
  }
    closeModal = (e) => {
    this.setState({ ...this.state, showModal: false })
  }

    render(){
    	const {
      showModal
    } = this.state;
    const {title} = this.props;
    	return(
		<Modal trigger={
			<span 
			 onClick={this.openModal}>Deliver to Place</span>} 
			 open={showModal}
	    >
		 <Modal.Header>
		  {title}
		  <Label 
		    icon='close' 
		    corner='right' 
		    color='transparent' 
		    onClick={(e) => this.closeModal(e)} 
		   />
		 </Modal.Header>
		  <Modal.Content image>
	       <Modal.Description>
	        <Header>Default Profile Image</Header>
	         <p>
	          We've found the following gravatar image associated with your e-mail
	          address.
	         </p>
	         <p>Is it okay to use this photo?</p>
	        </Modal.Description>
	       </Modal.Content>
		  </Modal>
	     )
    }
	
}

export default CustomerModal;