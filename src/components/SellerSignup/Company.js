import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Form, Icon } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';
import { sellerSignup } from '../../redux/actions';
import './SellerSignup.scss';

class Company extends Component {
  state = {
    form: {
      companyName: '',
      companyWebsite: '',
      companyRegistrationCertificate: '',
      companyPhysicalAddressDistrict: '',
      companyPhysicalAddressCell: '',
      contactPersonalName: '',
      contactPersonalID: '',
      CopyOfID: '',
      TIN: '',
      companyEmail: '',
      companyPhysicalAddressProvince: '',
      companyPhysicalAddressSector: '',
      companyPhysicalAddressVillage: '',
      contactPersonalNumber: '',
      contactPersonalEmail: '',
    },
    errors: {},
    loading: false,
    message: '',
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

  render() {
    const { handleClick, selected, form } = this.state;
    return (
      <FormCard
        header={<FormHeader selected={selected} handleClick={handleClick} />}
        contents={
          <Form onSubmit={this.handleSubmit}>
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
                  name="companyRegistrationCertificate"
                  value={form.companyRegistrationCertificate}
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
                  name="contactPersonalName"
                  value={form.contactPersonalName}
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
                  name="TIN"
                  value={form.TIN}
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
                  name="contactPersonalEmail"
                  value={form.contactPersonalEmail}
                  onChange={this.handleChange}
                  label="Contact Personal Email"
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
    );
  }
}

const mapStateToProps = ({ seller: { signup } }) => ({
  signup,
});

const mapDispatchToProps = (dispatch) => ({
  createSeller: (payload) => dispatch(sellerSignup(payload)),
});

export default connect(null, mapDispatchToProps)(Company);
