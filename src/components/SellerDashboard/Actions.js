import React from 'react';
import { Icon } from 'semantic-ui-react';
import './SellerDashboard.scss';

const Actions = ({ type }) => (
  <div>
    {(type === 'order' && <div>Update status</div>) || (
      <div className="actions-buttons-container">
        <div className="action-button-edit">
          <Icon name="pencil" className="edit-icon" />
        </div>
        <div className="action-button-delete">
          <Icon name="trash" className="delete-icon" />
        </div>
      </div>
    )}
  </div>
);

export default Actions;
