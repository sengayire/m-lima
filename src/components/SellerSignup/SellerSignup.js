import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../container';
import { Header } from '../commons';
import SellerSignupContainer from './SellerSignupContainer';
import { sellerSignup } from '../../redux/actions';

class SellerSignup extends Component {
  state = {
    name: 'individual',
    form: {
      sellerType: '',
      status: 'PENDING',
    },
    errors: {},
    loading: false,
    message: '',
    payload: {},
  };

  componentDidMount = () => {
    const { handleClick, selected } = this.props;
    this.setState({ handleClick, selected });
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

  handleSubmit = (sellerType) => {
    const { createSeller } = this.props;
    const { form } = this.state;
    const formData = { ...form, sellerType };
    console.log('form data =>>', formData);

    createSeller(formData);
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      seller: { loading, message, payload },
    } = nextProps;
    this.setState({
      loading,
      message,
      payload,
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
