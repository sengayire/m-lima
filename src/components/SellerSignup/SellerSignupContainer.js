import React from 'react';
import './SellerSignup.scss';
import Individual from './Individual';
import Company from './Company';
import Cooperative from './Coperative';

const SellerSignupContainer = ({
  handleClick,
  name,
  handleChange,
  handleSubmit,
  errors,
  message,
  loading,
  payload,
}) => (
  <div className="seller-signup-container">
    {name === 'individual' && (
      <Individual
        selected="individual"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        errors={errors}
        message={message}
        loading={loading}
        payload={payload}
      />
    )}
    {name === 'company' && <Company selected="company" handleClick={handleClick} />}
    {name === 'cooperative' && (
      <Cooperative
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selected="cooperative"
        handleClick={handleClick}
        errors={errors}
        message={message}
        loading={loading}
        payload={payload}
      />
    )}
  </div>
);

export default SellerSignupContainer;
