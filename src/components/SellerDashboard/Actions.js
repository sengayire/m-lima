import React from 'react';
import { Icon } from 'semantic-ui-react';
import './SellerDashboard.scss';

const Actions = ({ type, handleClick }) => (
  <div>
    {(type === 'order' && <div>Update status</div>) || (
      <div className="actions-buttons-container">
        <div className="action-button-edit">
          <Icon onClick={() => handleClick('edit')} name="pencil" className="edit-icon" />
        </div>
        <div className="action-button-delete">
          <Icon onClick={() => handleClick('delete')} name="trash" className="delete-icon" />
        </div>
      </div>
    )}
  </div>
);

export default Actions;
