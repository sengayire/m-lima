import React from 'react';
import { Form } from 'semantic-ui-react';
import { Check, Close } from '@material-ui/icons';
import UserAvatar from '../commons/UserAvatar';
import { FormCard, FormInput, FormButton } from '../commons';

const PersonalInformation = () => (
  <FormCard
    header="Personal information"
    contents={
      <Form>
        <div className="form-content">
          <div className="form-input-container">
            <FormInput label="Phone No." bordered />
            <FormInput icon="caret down" label="District" bordered />
            <FormInput icon="caret down" label="Cell" bordered />
          </div>
          <div className="form-input-container">
            <FormInput icon="caret down" label="Province" bordered />
            <FormInput icon="caret down" label="Sector" bordered />
            <FormInput icon="caret down" label="Village" bordered />
          </div>
          <div>
            <UserAvatar size="large" upload="Upload profile picture" />
          </div>
        </div>
        <div className="form-bottom-container">
          <div className="user-info-container">
            <div className="user-info">
              <span>Full name: LastName FirstName</span>
              <span>Gender: Male</span>
              <span>National ID Number: XXXXX </span>
              <span>District: XXXXX</span>
              <span>Cell: XXXXXXXX</span>
            </div>
            <div className="user-info">
              <span>Full name: LastName FirstName</span>
              <span>Gender: Male</span>
              <span>National ID Number: XXXXX </span>
              <span>District: XXXXX</span>
              <span>Cell: XXXXXXXX</span>
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

export default PersonalInformation;
