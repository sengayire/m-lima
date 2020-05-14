import React from 'react';
import './SellerSignup.scss';

const FormHeader = ({ handleClick, selected }) => (
  <div className="seller-form-header">
    <span
      className={selected === 'individual' && 'selected'}
      onClick={() => handleClick('individual')}
    >
      Individual
    </span>
    <span className={selected === 'company' && 'selected'} onClick={() => handleClick('company')}>
      Company
    </span>
    <span
      className={selected === 'cooperative' && 'selected'}
      onClick={() => handleClick('cooperative')}
    >
      Cooperative
    </span>
  </div>
);

export default FormHeader;
