import React from 'react';
import { Form, Icon, Dimmer, Loader } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { FormCard, FormInput, FormButton, UserAvatar } from '../commons';
import FormHeader from './FormHeader';

const Cooperative = ({
  handleClick,
  selected,
  handleChange,
  handleSubmit,
  loading,
  errors,
  message,
  payload,
}) => (
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
    <span>Cooperative Application</span>
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
          <div className="form-content no-bg">
            <div className="form-input-container">
              <FormInput onChange={handleChange} label="Cooperative Name" bordered />
              <FormInput
                onChange={handleChange}
                icon={<Icon name="attach" />}
                label="Cooperative Registration Certificate"
                bordered
              />
              <FormInput
                onChange={handleChange}
                icon="caret down"
                label="Cooperative Registration District"
                bordered
              />
              <FormInput
                onChange={handleChange}
                icon="caret down"
                label="Cooperative Physical Address Cell"
                bordered
              />
              <FormInput onChange={handleChange} label="Contact Person name" bordered />
              <FormInput onChange={handleChange} label="Contact Person National ID" bordered />
              <FormInput
                onChange={handleChange}
                icon={<Icon name="attach" />}
                label="Copy of ID"
                bordered
              />
            </div>
            <div className="form-input-container">
              <FormInput onChange={handleChange} label="Registration Number" bordered />
              <FormInput
                onChange={handleChange}
                icon="caret down"
                label=" Cooperative Physical Address Province"
                bordered
              />
              <FormInput
                onChange={handleChange}
                icon="caret down"
                label="Cooperative Physical Address Sector"
                bordered
              />
              <FormInput
                onChange={handleChange}
                icon="caret down"
                label="Cooperative Physical Address Village"
                bordered
              />
              <FormInput onChange={handleChange} label="Contact Person Phone Number" bordered />
              <FormInput onChange={handleChange} label="Contact Person Email" bordered />
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
                onClick={() => handleSubmit('COOPERATIVE')}
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

export default Cooperative;
