import React from 'react';

const FormHeader = ({ handleClick }) => (
  <div className="seller-form-header">
    <button type="button" className="individual" onClick={() => handleClick('individual')}>
      Individual
    </button>
    <button type="button" className="company" onClick={() => handleClick('company')}>
      Company
    </button>
    <button type="button" className="cooperative" onClick={() => handleClick('cooperative')}>
      Cooperative
    </button>
  </div>
);

export default FormHeader;
