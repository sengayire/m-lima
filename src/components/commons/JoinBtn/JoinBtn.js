import React from 'react';
import { Button, Popup } from 'semantic-ui-react';
import Signin from '../../Signin';
import Signup from '../../Signup';
import './JoinBtn.scss';


const JoinBtn = () => {
  return (
    <div className='btn-container'>
      <Popup 
       content={<Signin />} 
       className='signin-popup-container'
       style={{backgroundColor: '#ECF0F1', borderRadius: 10, width: '100%'}}
       position='bottom left' 
       pinned     
       on='click' 
       trigger={ 
                 <span className='sign-in'> 
                  <u>Sign in</u>
                 </span>}
       />
  
    <Popup 
       content={<Signup />} 
       className='signup-popup-container'
       style={{backgroundColor: '#ECF0F1', borderRadius: 10, width: '100%' }}
       position='bottom left' 
       pinned   
       style={{backgroundColor: '#ECF0F1'}}  
       on='click' 
       trigger={ 
                <span className='join-btn'>
                 <Button size='mini' content='Join' primary />
                </span>
    }
       />
       
    </div>
  );
};

export default JoinBtn;