import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import './SellerDashboard.scss';

const Actions = ({ type, handleClick, id }) => (
  <div>
    {(type === 'order' && <div>Update status</div>) || (
      <div className="actions-buttons-container">
        <div className="action-button-edit">
          <Popup
            trigger={
              <Icon onClick={() => handleClick('edit', id)} name="pencil" className="edit-icon" />
            }
            content="Edit"
            position="top left"
            size="mini"
          />
        </div>
        <div className="action-button-delete">
          <Popup
            trigger={
              <Icon
                onClick={() => handleClick('delete', id)}
                name="trash"
                className="delete-icon"
              />
            }
            content="delete"
            position="top left"
            size="mini"
          />
        </div>
      </div>
    )}
  </div>
);

export default Actions;
