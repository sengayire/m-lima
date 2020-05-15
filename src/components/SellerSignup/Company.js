import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Form, Icon, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';
import { sellerSignup } from '../../redux/actions';
import './SellerSignup.scss';

class Company extends Component {
  state = {
    form: {
      companyName: '',
      companyWebsite: '',
      certificatePath: '',
      companyPhysicalAddressDistrict: '',
      companyPhysicalAddressCell: '',
      contactPersonName: '',
      contactPersonalID: '',
      CopyOfID: '',
      tinNumber: '',
      companyEmail: '',
      companyPhysicalAddressProvince: '',
      companyPhysicalAddressSector: '',
      companyPhysicalAddressVillage: '',
      contactPersonalNumber: '',
      contactEmail: '',
      sellerType: 'COMPANY',
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
    const { form } = this.state;
    createSeller(form);
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
    const { handleClick, selected, form, loading, errors, message, payload } = this.state;

    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {Object.keys(errors).length || message ? (
          <Alert severity="error">{message || errors.message}</Alert>
        ) : (
          ''
        )}
        {loading && (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
        <span>Company Application</span>
        <FormCard
          header={<FormHeader selected={selected} handleClick={handleClick} />}
          contents={
            <Form>
              {payload && Object.keys(payload).length !== 0 && (
                <Redirect
                  to={{
                    pathname: '/activate_account',
                    state: { payload },
                  }}
                />
              )}

              <div className="form-content">
                <div className="form-input-container">
                  <FormInput
                    name="companyName"
                    value={form.companyName}
                    label="Company Name"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="companyWebsite"
                    value={form.companyWebsite}
                    label="Company Website"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="certificatePath"
                    value={form.certificatePath}
                    icon={<Icon name="attach" />}
                    label="Company Registration Certificate"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="companyPhysicalAddress"
                    value={form.companyPhysicalAddressDistrict}
                    icon="caret down"
                    label="Company Physical Address District"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="companyPhysicalAddressCell"
                    value={form.companyPhysicalAddressCell}
                    icon="caret down"
                    label="Company Physical Address Cell"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="contactPersonName"
                    value={form.contactPersonName}
                    icon="caret down"
                    label="Contact person name"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="contactPersonalID"
                    value={form.contactPersonalID}
                    icon="caret down"
                    label="Contact person national ID number"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="CopyOfID"
                    icon={<Icon name="attach" />}
                    label="Copy of ID"
                    bordered
                    value={form.CopyOfID}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-input-container">
                  <FormInput
                    name="tinNumber"
                    value={form.tinNumber}
                    onChange={this.handleChange}
                    label="TIN"
                    bordered
                  />
                  <FormInput
                    name="companyEmail"
                    value={form.companyEmail}
                    onChange={this.handleChange}
                    label="Company Email Address"
                    bordered
                  />
                  <FormInput
                    name="companyPhysicalAddressProvince"
                    companyPhysicalAddressProvince
                    value={form.companyPhysicalAddressProvince}
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Company Physical address Province"
                    bordered
                  />
                  <FormInput
                    name="companyPhysicalAddressSector"
                    value={form.companyPhysicalAddressSector}
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Company Physical Address Sector"
                    bordered
                  />
                  <FormInput
                    name="companyPhysicalAddressVillage"
                    value={form.companyPhysicalAddressVillage}
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Company physical address Village"
                    bordered
                  />
                  <FormInput
                    name="contactPersonalNumber"
                    value={form.contactPersonalNumber}
                    onChange={this.handleChange}
                    label="Contact Person Number"
                    bordered
                  />
                  <FormInput
                    name="contactEmail"
                    value={form.contactEmail}
                    onChange={this.handleChange}
                    label="Contact Person Email"
                    bordered
                  />
                </div>
                <div>
                  <UserAvatar size="large" upload="Upload profile picture" />
                </div>
              </div>
              <div className="form-bottom-container">
                <div className="form-button-container">
                  <FormButton
                    icon={<Check />}
                    background="#1e90ff"
                    title="Submit"
                    color="white"
                    type="submit"
                    onClick={this.handleSubmit}
                  />
                  <Link to="/">
                    <FormButton
                      type="button"
                      icon={<Close />}
                      background="#a4b0be"
                      title="Cancel"
                      color="white"
                    />
                  </Link>
                </div>
              </div>
            </Form>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ seller }) => ({
  seller,
});

const mapDispatchToProps = (dispatch) => ({
  createSeller: (payload) => dispatch(sellerSignup(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
