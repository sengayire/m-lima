import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Form, Icon, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Alert } from '@material-ui/lab';

import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';
import { sellerSignup } from '../../redux/actions';
import './SellerSignup.scss';

class Company extends Component {
  state = {
    form: {
      name: '',
      website: '',
      licenseNumber: '',
      companyPhysicalAddressDistrict: '',
      companyPhysicalAddressCell: '',
      contactPersonName: '',
      contactPersonNationalId: '',
      CopyOfID: '',
      tinNumber: '',
      companyEmail: '',
      companyPhysicalAddressProvince: '',
      companyPhysicalAddressSector: '',
      companyVillageId: '',
      contactPhone: '',
      password: '',
      contactEmail: '',
      sellerType: 'COMPANY',
      status: 'PENDING',
      contactPersonVillageId: 16,
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
    console.log('form', form);

    const url = '/sellers/signup-company';
    createSeller({ form, url });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      seller: { loading, message, payload, errors },
    } = nextProps;
    const alertMessage = toast.error(errors.message || message, {
      closeOnClick: true,
      pauseOnHover: true,
    });
    this.setState({
      loading,
      message,
      payload,
    });
    return alertMessage;
  };

  render() {
    const { handleClick, selected, form, loading, errors, message, payload } = this.state;

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ToastContainer />
        {loading && (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
        <FormCard
          title="Company Application"
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
                    name="name"
                    value={form.name}
                    label="Company Name"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="website"
                    value={form.website}
                    label="Company Website"
                    bordered
                    onChange={this.handleChange}
                  />
                  <FormInput
                    name="licenseNumber"
                    value={form.licenseNumber}
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
                    name="contactPersonNationalId"
                    value={form.contactPersonNationalId}
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
                    name="companyVillageId"
                    value={form.companyVillageId}
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Company physical address Village"
                    bordered
                  />
                  <FormInput
                    name="contactPhone"
                    value={form.contactPhone}
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
                  <FormInput
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={this.handleChange}
                    label="Password"
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
