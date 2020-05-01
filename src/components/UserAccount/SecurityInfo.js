import React from 'react';
import { Form } from 'semantic-ui-react';
import { Check } from '@material-ui/icons';
import { FormCard, FormInput, FormButton } from '../commons';

const SecurityInfo = () => (
<div className='password-form-container' style={{ width: '60%', height: '90%' }}>

<FormCard header='Change password' contents={
            <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: '80%', width: '80%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
            <FormInput type='password' label='Old password' bordered/>
            <FormInput type='password' label='New password' bordered/>
            <FormInput type='password' label='Confirm new password' bordered/>
            </div>
            <div className='form-bottom-container'>
            <div className='form-button-container'>
               <FormButton icon={<Check />} background='#1e90ff' title='Save'/>
            </div>
        </div>
                </div>
        </Form>
    }/>
</div>
);


export default SecurityInfo;
