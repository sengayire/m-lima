import React, { Component} from 'react';
import { DeliveryAddress } from '../commons';

class DeliveryInfo extends Component { 
    state = {};
    handleClick = () => { 
        this.setState({
            clicked: true
        })
    }
    render() { 
        const { clicked } = this.state;
        return (
        <div>
            <div>Logo</div>
            <div>
                    {
                        !clicked ? (<div>
                            <DeliveryAddress />
                            <div><span onClick={() => this.handleClick()}>Edit</span> <span>Add new address</span></div>
                        </div>) : (<div> here</div>)
                    }
            </div>
        </div>)
    }
}

export default DeliveryInfo;