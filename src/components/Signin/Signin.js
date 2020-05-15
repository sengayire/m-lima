import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Popup, Form, Input, Dimmer, Loader } from 'semantic-ui-react';
import { Alert } from '@material-ui/lab';
import FormInput from '../commons/FormInput';
import { signin } from '../../redux/actions';
import './Signin.scss';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  state = {
    form: {
      password: '',
      login: '',
    },
    loading: false,
    message: '',
    errors: {},
  };

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
    });
  };

  handleSubmit = () => {
    const { form } = this.state;
    const { activeLogin } = this.props;
    activeLogin(form);
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      login: { loading, isAuth, message, errors },
    } = nextProps;
    if (isAuth) {
      return <Redirect to="/" />;
    }

    this.setState({
      loading,
      isAuth,
      message,
      errors,
    });
  };

  render() {
    const { message, loading, errors, isAuth } = this.state;
    return (
      <div>
        <Form>
          {(loading && <Loader active inline="centered" />) ||
            (message.message && <Alert severity="error">{message.message} </Alert>) ||
            (message && (
              <Alert severity="error">
                {`${(message.login && `email ${message.login}`) || ''}` +
                  `\r ${(message.password && `password ${message.password}`) || ''}`}
              </Alert>
            ))}
          <FormInput
            name="login"
            onChange={(e) => this.handleChange(e)}
            type="email"
            label="Email"
            bordered={message.login && true}
            error={message.login && true}
          />
          <FormInput
            name="password"
            onChange={(e) => this.handleChange(e)}
            type="password"
            label="password"
            bordered={message.password && true}
            error={message.password && true}
          />
          <center>
            <Button type="submit" primary onClick={this.handleSubmit}>
              Login
            </Button>
          </center>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ signin }) => ({
  login: signin,
});

const mapDispatchToProps = (dispatch) => ({
  activeLogin: (payload) => dispatch(signin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
