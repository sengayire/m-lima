import React from 'react';
import { Button, Popup, Form, Input, Checkbox, Image, Icon } from 'semantic-ui-react';
import './Signup.scss';
import facebook from '../../assets/images/facebook.svg';
import gmail from '../../assets/images/gmail.svg';
import instagram from '../../assets/images/instagram.svg';

const Signup = () => (
		<div>
     <Form>
     <center><h3>Sign up</h3></center>
      <Form.Field>
       <label>Email</label>
        <Input className='signup-inputs' size='mini' />
      </Form.Field>
      <Form.Field>
       <label>Password</label>
       <Input className='signup-inputs' size='mini' icon={<Icon name='eye slash'/>} />
      </Form.Field>
      <Form.Field>
       <label>Role</label>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
         <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Buyer:</span>
           <Checkbox className='role-checkbox' />
         </div>
         <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Seller:</span>
          <Checkbox className='role-checkbox' />
         </div>
       </div>
      </Form.Field>
       <Form.Field>
       <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox style={{ marginRight: 5 }}/>
        <label>I agree to the <a>terms&conditions</a> </label>
       </div>
       </Form.Field>
     <center>
      <Button type='submit' primary>Create account</Button>
     </center>
       <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px', flexDirection: 'column' }}>
        <div>Or sign up with</div>
        <div >
         <Image.Group size='mini' >
          <Image src={facebook} style={{ width: '25px' }}/>
          <Image src={instagram} style={{ width: '25px' }} />
          <Image src={gmail} style={{ width: '25px' }}/>
         </Image.Group>
         </div>
      </div>
      </Form>

	  </div>
);

export default Signup;
