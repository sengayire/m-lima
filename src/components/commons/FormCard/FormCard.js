import React from 'react';
import './Form.scss';

const FormCard = ({ contents, header, title }) => (
  <div className="form-card-container">
    <center>
      <h1>{title}</h1>
    </center>
    <div className="form-card-header">{header}</div>
    <div className="card-form">{contents}</div>
  </div>
);

export default FormCard;
