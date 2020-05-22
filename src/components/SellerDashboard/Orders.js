import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllOrders from './AllOrders';
import { getSellerOrders } from '../../redux/actions';

class Orders extends Component {
  state = { isAuth: false };

  UNSAFE_componentWillMount() {
    console.log('will mount');
    const { getSellerOrders, profile, isAuth } = this.props;
    this.setState({ isAuth });
    getSellerOrders(profile.orgID);
  }

  render() {
    return (
      <div className="seller-dashboard-container">
        <AllOrders />
      </div>
    );
  }
}
const mapStateToProps = ({ signin: { profile, isAuth } }) => ({ profile, isAuth });

export default connect(mapStateToProps, { getSellerOrders })(Orders);
