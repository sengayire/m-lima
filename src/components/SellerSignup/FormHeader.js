import React from 'react';
import './SellerSignup.scss';

const FormHeader = ({handleClick}) => {
  return (
        <div className='seller-form-header'>
            <span onClick={() => handleClick('individual')}>Individual</span>
            <span onClick={() => handleClick('company')}>Company</span>
            <span onClick={() => handleClick('cooperative')}>Cooperative</span>
        </div>
  );
};

export default FormHeader;
