import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Form, Icon } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';
import { sellerSignup, getProvinces, getDistricts, getSector, getCell } from '../../redux/actions';
import './SellerSignup.scss';

class Company extends Component {
  state = {
    form: {
      name: '',
      website: '',
      licenseNumber: '',
      district: '',
      cell: '',
      contactPersonName: '',
      contactPersonNationalId: '',
      CopyOfID: '',
      tinNumber: '',
      companyEmail: '',
      province: '',
      sector: '',
      villageId: '',
      contactPhone: '',
      password: '',
      contactEmail: '',
      sellerType: 'COMPANY',
      status: 'PENDING',
      contactPersonVillageId: '',
    },
    errors: {},
    loading: false,
    message: '',
    payload: {},
    provinces: [],
    districts: [],
    sectors: [],
    cells: [],
    loading: false,
  };

  componentDidMount = () => {
    const { handleClick, selected, allProvinces } = this.props;
    this.setState({ handleClick, selected });
    allProvinces();
  };

  getLocations = (data, key) => {
    const { allDistricts, allSector, allCells } = this.props;
    if (data.name === 'province') {
      return allDistricts(key);
    }
    if (data.name === 'district') {
      return allSector(key);
    }
    if (data.name === 'sector') {
      return allCells(key);
    }
  };

  handleChange = (e, data) => {
    const { key } = data.options.find((e) => e.value === data.value);
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: '',
    });
    return this.getLocations(data, key);
  };

  handleSubmit = () => {
    const { createSeller } = this.props;
    const { form } = this.state;
    const url = '/sellers/signup-company';
    createSeller({ form, url });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {
      seller: { message, payload, errors },
      provinces,
      districts,
      loading,
      sectors,
      cells,
    } = nextProps;
    const alertMessage = toast.error(errors.message || message, {
      closeOnClick: true,
      pauseOnHover: true,
    });
    this.setState({
      loading,
      message,
      payload,
      provinces,
      districts,
      sectors,
      cells,
    });
    return alertMessage;
  };

  render() {
    const {
      handleClick,
      selected,
      form,
      loading,
      payload,
      provinces,
      districts,
      sectors,
      cells,
    } = this.state;
    const options =
      provinces &&
      provinces.map((name) => {
        return {
          key: name.id,
          text: name.name,
          value: name.name,
        };
      });
    const districtOptions =
      districts &&
      districts.map((name) => {
        return {
          key: name.id,
          text: name.name,
          value: name.name,
        };
      });
    const sectorOpt =
      sectors &&
      sectors.map((name) => {
        return {
          key: name.id,
          text: name.name,
          value: name.name,
        };
      });

    const cellsOpt =
      cells &&
      cells.map((name) => {
        return {
          key: name.id,
          text: name.name,
          value: name.name,
        };
      });

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ToastContainer />
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
                    loading={loading}
                    placeholder="Select District"
                    name="district"
                    icon="caret down"
                    label="District"
                    bordered
                    onChange={this.handleChange}
                    options={districtOptions}
                    select
                  />
                  <FormInput
                    loading={loading}
                    options={cellsOpt}
                    name="cell"
                    icon="caret down"
                    label="Cell"
                    bordered
                    onChange={this.handleChange}
                    select
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
                    loading={loading}
                    options={options}
                    name="province"
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Province"
                    bordered
                    placeholder="Select Province"
                    select
                  />
                  <FormInput
                    loading={loading}
                    options={sectorOpt}
                    name="sector"
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Sector"
                    bordered
                    select
                  />
                  <FormInput
                    loading={loading}
                    // options={options}
                    name="village"
                    onChange={this.handleChange}
                    icon="caret down"
                    label="Village"
                    bordered
                    select
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

const mapStateToProps = ({
  seller,
  locationAddresses: { provinces, provinceDistricts, sectors, loading, cell },
}) => ({
  seller,
  provinces,
  districts: provinceDistricts,
  loading,
  sectors,
  cell,
});

const mapDispatchToProps = (dispatch) => ({
  createSeller: (payload) => dispatch(sellerSignup(payload)),
  allProvinces: (payload) => dispatch(getProvinces(payload)),
  allDistricts: (payload) => dispatch(getDistricts(payload)),
  allSector: (payload) => dispatch(getSector(payload)),
  allCells: (payload) => dispatch(getCell(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
