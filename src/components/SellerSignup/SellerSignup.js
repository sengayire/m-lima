import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Container from '../../container';
import { Header } from '../commons';
import SellerSignupContainer from './SellerSignupContainer';
import { sellerSignup } from '../../redux/actions';

class SellerSignup extends Component {
  state = {
    name: 'individual',
    form: {
      contactPersonName: '',
      contactEmail: '',
      contactPhone: '',
      firstName: '',
      gender: '',
      lastName: '',
      licenseNumber: '',
      nationalId: '',
      password: '',
      villageId: 0,
    },
    errors: {},
    loading: false,
    message: '',
    payload: {},
  };

  handleClick = (name) => {
    this.setState({ name });
  };

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: '',
    });
  };

  handleSubmit = () => {
    const { createSeller } = this.props;
    const { form, name } = this.state;
    const url = `/sellers/signup-${name}`;
    createSeller({ form, url });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      seller: { loading, message, payload, errors },
    } = nextProps;

    this.setState({
      loading,
      message,
      payload,
      errors,
    });
  };

  render() {
    const { name, errors, message, loading, payload } = this.state;
    return (
      <Container
        header={<Header />}
        content={
          <SellerSignupContainer
            name={name}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
            errors={errors}
            message={message}
            loading={loading}
            payload={payload}
          />
        }
      />
    );
  }
}

const mapStateToProps = ({ seller }) => ({
  seller,
});

const mapDispatchToProps = (dispatch) => ({
  createSeller: (payload) => dispatch(sellerSignup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellerSignup);
