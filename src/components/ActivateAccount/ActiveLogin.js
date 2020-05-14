import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'semantic-ui-react';
import { Check } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { FormCard, FormInput, FormButton, Header } from '../commons';
import { signin } from '../../redux/actions';
import Container from '../../container';

class ActiveLogin extends Component {
  state = {
    form: {
      password: '',
      login: '',
    },
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
    console.log('form', form);
  };

  render() {
    return (
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
            <Alert severity="success">
              Your Account have been activated successfully, Please login with your credential to
              enjoy our services
            </Alert>
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
                        />
                        <FormInput
                          name="password"
                          onChange={(e) => this.handleChange(e)}
                          type="password"
                          label="Password"
                          bordered
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
    );
  }
}

const mapStateToProps = ({ activateAccount }) => ({
  activateAccount,
});

const mapDispatchToProps = (dispatch) => ({
  activeLogin: (payload) => dispatch(signin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLogin);
