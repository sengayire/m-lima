import React from 'react';
import { Button, Popup, Form, Input } from 'semantic-ui-react';
import  './Signin.scss'
const Signin = () =>{

	return (
		<div> 
    <Form>
     <Form.Field>
      <label>Email</label>
      <Input size='mini'/>
     </Form.Field>
    <Form.Field>
     <label>Password</label>
     <Input size='mini' />
    </Form.Field>
    <center><Button type='submit' primary>Login</Button></center>
  </Form>
		</div>);
}

export default Signin;