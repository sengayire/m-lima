import React from 'react';
import { Form, Icon, Dimmer, Loader } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { ToastContainer } from 'react-toastify';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';

const Individual = ({
  handleClick,
  selected,
  handleSubmit,
  handleChange,
  errors,
  message,
  loading,
  payload,
}) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ToastContainer />
      {loading && (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      )}

      <FormCard
        title="Individual Seller Application"
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
                  name="nationalId"
                  onChange={handleChange}
                  label="National identification number"
                  bordered
                />
                <FormInput name="lastName" onChange={handleChange} label="Last name" bordered />
                <FormInput name="firstName" onChange={handleChange} label="First name" bordered />
                <FormInput
                  name="gender"
                  icon="caret down"
                  onChange={handleChange}
                  label="Gender"
                  bordered
                />
                <FormInput
                  name="licenseNumber"
                  icon={<Icon name="attach" />}
                  onChange={handleChange}
                  label="Authorization document"
                  bordered
                />
                <FormInput
                  icon={<Icon name="attach" />}
                  onChange={handleChange}
                  label="Copy of ID"
                  bordered
                />
                <FormInput
                  name="contactEmail"
                  type="email"
                  onChange={handleChange}
                  label="email"
                  bordered
                />
              </div>
              <div className="form-input-container">
                <FormInput name="contactPhone" onChange={handleChange} label="Phone No." bordered />
                <FormInput icon="caret down" onChange={handleChange} label="Province" bordered />
                <FormInput icon="caret down" onChange={handleChange} label="District" bordered />
                <FormInput icon="caret down" onChange={handleChange} label="Sector" bordered />
                <FormInput icon="caret down" onChange={handleChange} label="Cell" bordered />
                <FormInput
                  name="villageId"
                  icon="caret down"
                  onChange={handleChange}
                  label="Village"
                  bordered
                />
                <FormInput
                  name="password"
                  type="password"
                  onChange={handleChange}
                  label="password"
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
                  onClick={() => handleSubmit('INDIVIDUAL')}
                />
                <Link to="/">
                  <FormButton icon={<Close />} background="#a4b0be" title="Cancel" color="white" />
                </Link>
              </div>
            </div>
          </Form>
        }
      />
    </div>
  );
};

export default Individual;
