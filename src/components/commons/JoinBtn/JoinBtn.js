import React from 'react';
import { Button } from 'semantic-ui-react';
import './JoinBtn.scss';

const JoinBtn = () => {
  return (
    <div className='btn-container'>
      <span className='sign-in'>
        <u>Sign in</u>
      </span>
      <span className='join-btn'>
        <Button size='mini' content='Join' primary />
      </span>
    </div>
  );
};

export default JoinBtn;
