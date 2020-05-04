import React from 'react';
import './SellerSignup.scss';
import Individual from './Individual';
import Company from './Company';
import Cooperative from './Coperative';

const SellerSignupContainer = ({ handleClick, name }) => (
        <div className='seller-signup-container'>
         {name === 'individual' && <Individual name={name} handleClick={handleClick}/>}
         {name === 'company' && <Company name={name} handleClick={handleClick}/>}
         {name === 'cooperative' && <Cooperative name={name} handleClick={handleClick}/>}
        </div>);

export default SellerSignupContainer;
