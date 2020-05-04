import React from 'react';
import UserInfo from './UserInfo';
import AddUser from './AddUser';

const PersonalInformation = ({ handleClick, name }) => (
    <div className='password-form-container' style={{ width: '60%', height: '90%' }}>

        {name === 'personalInfo' && <UserInfo name={name} handleClick={handleClick}/>}
        {name === 'addUser' && <AddUser name={name} handleClick={handleClick}/>}
    </div>
);


export default PersonalInformation;
