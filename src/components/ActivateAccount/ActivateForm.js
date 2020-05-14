import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'semantic-ui-react';
import { Check } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { FormCard, FormInput, FormButton } from '../commons';

const ActivateForm = ({ location, handleSubmit, handleChange, message }) => {
  const {
    state: { payload },
  } = location;
  return (
    <div
      style={{
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderTop: '#eee639 10px solid',
      }}
    >
      <div style={{ width: '30%', height: '60%' }}>
        {(!message && Object.keys(payload).length && (
          <Alert severity="success">
            {`You have signed up successfully, Please Check ${payload.contactEmail} to activate your account`}
          </Alert>
        )) || <Alert severity="error">{message}</Alert>}
        <FormCard
          header="Activate your account"
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
                    name="activationCode"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    label="Activation code"
                    bordered
                  />
                  <FormInput
                    name="email"
                    onChange={(e) => handleChange(e)}
                    type="email"
                    label="Email"
                    bordered
                  />
                </div>
                <div className="form-bottom-container">
                  <div className="form-button-container">
                    <FormButton
                      icon={<Check />}
                      background="#1e90ff"
                      title="Activate"
                      color="white"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </Form>
          }
        />
      </div>
    </div>
  );
};

export default ActivateForm;
