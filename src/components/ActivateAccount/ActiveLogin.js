import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Dimmer, Loader } from 'semantic-ui-react';
import { Check } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { FormCard, FormInput, FormButton, Header } from '../commons';
import { signin } from '../../redux/actions';
import Container from '../../container';

class ActiveLogin extends Component {
  state = {
    form: {
      password: '',
      login: '',
    },
    isAuth: false,
    profile: {},
    errors: {},
    loading: '',
    payload: {},
    message: '',
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

    if (message.status === 401) {
      this.setState({ message });
    }

    this.setState({
      loading,
      isAuth,
      message,
      errors,
    });
  };

  render() {
    const { loading, isAuth, message, errors } = this.state;

    return (
      (isAuth && <Redirect to="/" />) || (
        <Container
          header={<Header />}
          content={
            <div
              style={{
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
                borderTop: '#eee639 10px solid',
              }}
            >
              {(loading && (
                <Dimmer active>
                  <Loader />
                </Dimmer>
              )) ||
                (errors && <Alert severity="error">{errors.message}</Alert>) ||
                (message && (
                  <Alert severity="error">
                    {message.message ||
                      `${(message.login && `email ${message.login}`) || ''}` +
                        `\r ${(message.password && `password ${message.password}`) || ''}`}
                  </Alert>
                )) || (
                  <Alert severity="success">
                    Your Account have been activated successfully, Please login with your credential
                    to enjoy our services
                  </Alert>
                )}
              <div
                style={{
                  width: '30%',
                  height: '60%',
                }}
              >
                <FormCard
                  header="Login to mlima Marketplace"
                  contents={
                    <Form
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                      }}
                    >
                      <div
                        style={{
                          height: '80%',
                          width: '80%',
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <div>
                          <FormInput
                            name="login"
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            label="Email"
                            bordered
                            error={message.login && true}
                          />
                          <FormInput
                            name="password"
                            onChange={(e) => this.handleChange(e)}
                            type="password"
                            label="Password"
                            bordered
                            error={message.password && true}
                          />
                        </div>
                        <div className="form-bottom-container">
                          <div className="form-button-container">
                            <FormButton
                              icon={<Check />}
                              background="#1e90ff"
                              title="Login"
                              color="white"
                              onClick={this.handleSubmit}
                            />
                          </div>
                        </div>
                      </div>
                    </Form>
                  }
                />
              </div>
            </div>
          }
        />
      )
    );
  }
}

const mapStateToProps = ({ signin }) => ({
  login: signin,
});

const mapDispatchToProps = (dispatch) => ({
  activeLogin: (payload) => dispatch(signin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLogin);
