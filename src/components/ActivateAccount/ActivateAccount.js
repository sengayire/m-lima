import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Container from '../../container';
import { Header } from '../commons';
import 'react-toastify/dist/ReactToastify.css';
import ActivateForm from './ActivateForm';
import { activateAccount } from '../../redux/actions';
import ActiveLogin from './ActiveLogin';

class ActivateAccount extends Component {
  state = {
    form: {
      activationCode: '',
      email: '',
    },
    activated: false,
    errors: {},
    loading: '',
    payload: {},
    message: '',
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      activateAccount: { message, payload },
    } = nextProps;
    this.setState({ message: message.message, activated: payload.success });
    return !Object.keys(message).length && <Redirect to="/" />;
  };

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
    });
  };

  handleSubmit = () => {
    const { activate } = this.props;
    const { form } = this.state;
    activate(form);
  };

  render() {
    const { location } = this.props;
    const { message, activated } = this.state;
    return (
      <Container
        header={<Header />}
        content={
          (activated && <Redirect to="/activate_account/login" />) || (
            <ActivateForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              location={location}
              message={message}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ activateAccount }) => ({
  activateAccount,
});

const mapDispatchToProps = (dispatch) => ({
  activate: (payload) => dispatch(activateAccount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);
