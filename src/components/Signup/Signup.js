import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Button, Form, Input, Checkbox, Image, Loader } from 'semantic-ui-react';
import './Signup.scss';
import Alert from '@material-ui/lab/Alert';
import facebook from '../../assets/images/facebook.svg';
import gmail from '../../assets/images/gmail.svg';
import instagram from '../../assets/images/instagram.svg';
import { saveBuyer, buyerSignup } from '../../redux/actions';

class Signup extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      contactEmail: '',
      password: '',
    },
    payload: {},
    checked: 'buyer',
    agreed: false,
    redirect: 'false',
    errors: {},
    loading: false,
    message: '',
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

  handleSelected = (signupOption) => {
    return this.setState({ checked: signupOption });
  };

  handleAgree = () => {
    this.setState({ agreed: true });
  };

  handleSubmit = () => {
    const { createBuyer } = this.props;
    const { form, checked, agreed } = this.state;
    return agreed
      ? (checked === 'buyer' && createBuyer(form)) || this.setState({ redirect: true })
      : this.setState({ errors: { message: 'Please Agree to the term and services' } });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      buyers: { loading, message, errors, payload },
    } = nextProps;
    const { form } = this.state;
    this.setState({
      payload,
      errors: { ...errors },
      message,
      loading,
    });
  };

  render() {
    const { form, errors, message, loading, checked, redirect, payload } = this.state;
    return (
      <div>
        {Object.keys(payload).length !== 0 && (
          <Redirect
            to={{
              pathname: '/activate_account',
              state: { payload },
            }}
          />
        )}
        {Object.keys(errors).length || message ? (
          <Alert severity="error">{message || errors.message}</Alert>
        ) : (
          ''
        )}
        {loading && <Loader active inline="centered" />}
        {redirect === true && <Redirect to="/signup/seller" />}
        <Form>
          <center>
            <h3>Sign up</h3>
          </center>
          <Form.Field>
            <label>First name</label>
            <Input
              name="firstName"
              onChange={this.handleChange}
              value={form.firstName}
              className="signup-inputs"
              size="mini"
            />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <Input
              name="lastName"
              onChange={this.handleChange}
              value={form.lastName}
              className="signup-inputs"
              size="mini"
            />
          </Form.Field>
          <Form.Field>
            <label>Contact email</label>
            <Input
              name="contactEmail"
              onChange={this.handleChange}
              value={form.contactEmail}
              type="email"
              className="signup-inputs"
              size="mini"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              name="password"
              onChange={this.handleChange}
              value={form.password}
              type="password"
              className="signup-inputs"
              size="mini"
            />
          </Form.Field>
          <Form.Field>
            <label>Role</label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>Buyer:</span>
                <Checkbox
                  onClick={() => this.handleSelected('buyer')}
                  checked={(checked === 'buyer' && true) || false}
                  className="role-checkbox"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span>Seller:</span>
                <Checkbox
                  onClick={() => this.handleSelected('seller')}
                  checked={(checked === 'seller' && true) || false}
                  name="seller"
                  className="role-checkbox"
                />
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Checkbox onClick={this.handleAgree} style={{ marginRight: 5 }} />
              <label>
                I agree to the <a>terms&conditions</a>{' '}
              </label>
            </div>
          </Form.Field>
          <center>
            <Button type="submit" onClick={this.handleSubmit} primary>
              Create account
            </Button>
          </center>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
              marginBottom: '10px',
              flexDirection: 'column',
            }}
          >
            <div>Or sign up with</div>
            <div>
              <Image.Group size="mini">
                <Image src={facebook} style={{ width: '25px' }} />
                <Image src={instagram} style={{ width: '25px' }} />
                <Image src={gmail} style={{ width: '25px' }} />
              </Image.Group>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

// Signup.propTypes = {
//   loading: PropTypes.bool,
//   message: PropTypes.string,
//   errors: PropTypes.object,
//   signupUser: PropTypes.func,
//   onClearSignupErrors: PropTypes.func
// };

const mapStateToProps = ({ buyers }) => ({
  buyers,
});

const mapDispatchToProps = (dispatch) => ({
  createBuyer: (payload) => dispatch(saveBuyer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
