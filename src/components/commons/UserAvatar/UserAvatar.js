import React from 'react';
import { Avatar } from '@material-ui/core';
import userAvatar from '../../../assets/images/user_avatar.png';
import './UserAvatar.scss';

const UserAvatar = () => (
        <div className='user-avatar-container'>
      <Avatar alt="Remy Sharp" src={userAvatar}/>
      <span>Hi, John Doe!</span>
        </div>
);

export default UserAvatar;
