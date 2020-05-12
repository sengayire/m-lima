import React from 'react';
import { Form } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import { FormCard, FormInput, FormButton } from '../commons';

const ShippingAddress = () => (
  <FormCard
    header="Personal information"
    contents={
      <Form>
        <div className="form-content">
          <div className="form-input-container">
            <FormInput icon="caret down" label="Country" placeholder="Rwanda" bordered />
            <FormInput icon="caret down" label="Province" bordered />
            <FormInput icon="caret down" label="District" bordered />
            <FormInput label="Contact name" bordered />
          </div>
          <div className="form-input-container">
            <FormInput icon="caret down" label="Sector" bordered />
            <FormInput icon="caret down" label="Cell" bordered />
            <FormInput icon="caret down" label="Village" bordered />
            <FormInput label="Phone No." bordered />
          </div>
          <div />
        </div>
        <div className="form-bottom-container">
          <div className="user-info-container">
            <div className="user-info">
              <span>Country: XXXXX</span>
              <span>Province: XXXXX</span>
              <span>District: XXXXX</span>
              <span>Contact name: surname firstName</span>
            </div>
            <div className="user-info">
              <span>Sector: XXXXX</span>
              <span>Cell: XXXXX</span>
              <span>Village: XXXXX </span>
              <span>Phone No: XXXXX</span>
            </div>
          </div>
          <div className="form-button-container">
            <FormButton icon={<Check />} background="#1e90ff" title="Save changes" color="white" />
            <FormButton
              icon={<Close />}
              background="#a4b0be"
              title="Deactivate account"
              color="white"
            />
          </div>
        </div>
      </Form>
    }
  />
);

export default ShippingAddress;
