import React from 'react';
import './SellerDashboard.scss';

const FormHeader = ({ handleClick, name }) => (
        <div className='seller-form-header'>
            <span className={name === 'personalInfo' && 'selected'} onClick={() => handleClick('personalInfo')}>Personal information</span>
            <span className={name === 'addUser' && 'selected'} onClick={() => handleClick('addUser')}>Add user per seller</span>
        </div>
);

export default FormHeader;
