import React from 'react';
import './Form.scss';

const FormCard = ({ contents, header }) => (
  <div className="form-card-container">
    <div className="form-card-header">{header}</div>
    <div className="card-form">{contents}</div>
  </div>
);

export default FormCard;
