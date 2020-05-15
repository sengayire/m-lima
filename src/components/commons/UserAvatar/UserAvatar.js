import React from 'react';
import { Avatar } from '@material-ui/core';
import { FlipCameraIos } from '@material-ui/icons';

import userAvatar from '../../../assets/images/user_avatar.png';
import './UserAvatar.scss';

const UserAvatar = ({ userName, size, upload }) => (
  <div className="user-avatar-container">
    <Avatar alt="Remy Sharp" src={userAvatar} className={`user-avatar ${size}`} />
    <span className="user-name">{userName}</span>
    <span className="upload-picture">
      <a>{upload}</a>
    </span>
    {upload && <FlipCameraIos className="upload-picture-icon" fontSize="large" />}
  </div>
);

export default UserAvatar;
