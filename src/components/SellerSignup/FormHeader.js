import React from 'react';
import './SellerSignup.scss';

const FormHeader = ({ handleClick, name }) => (
        <div className='seller-form-header'>
            <span className={name === 'individual' && 'selected'} onClick={() => handleClick('individual')}>Individual</span>
            <span className={name === 'company' && 'selected'} onClick={() => handleClick('company')}>Company</span>
            <span className={name === 'cooperative' && 'selected'} onClick={() => handleClick('cooperative')}>Cooperative</span>
        </div>
);

export default FormHeader;
